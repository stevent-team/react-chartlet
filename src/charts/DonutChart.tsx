import ChartSVG from '../components/ChartSVG'
import { TAU } from '../utils/constants'
import { CategoricalProps, ChartColor, GenericChartProps } from '../types/charts'
import { splitCategories } from '../utils/data'
import useChartletCtx from '../hooks/useChartletCtx'

export interface DonutChartProps extends GenericChartProps, CategoricalProps {
  segmentStyle?: React.CSSProperties,
  segmentStyles?: React.CSSProperties[],
  offset?: number,
  hole?: number,
  colors?: ChartColor[],
}

const DonutChart: React.FC<DonutChartProps> = ({
  segmentStyle={},
  segmentStyles=[],
  offset=0,
  hole=.5,
  ...props
}) => {
  const { width, height, colors, categories } = useChartletCtx(props)

  const [labels, values] = splitCategories(categories)

  // Must be at least one category
  if (!labels?.length)
    throw new Error('Bad Data Exception: expected at least one category')

  // Calculate the angle segments for each category
  const sum = values.reduce((a, b) => a + b, 0)
  const portions = values.map((x, i) => {
    const previousSum = values.slice(0, i).reduce((a, b) => a + b, 0)
    return { start: previousSum / sum, end: (previousSum + x) / sum }
  })

  return (
    <ChartSVG width={width} height={height} {...props} >
      {/* Render a single portion as two identical segments */}
      {values.length === 1 && <>
        <CircleSegment
          fill={colors?.[0]}
          style={{...segmentStyle, ...segmentStyles?.[0]}}
          hole={hole}
          width={width}
          height={height}
          start={0 + offset}
          end={0.5 + offset}/>
        <CircleSegment
          fill={colors[0]}
          style={{...segmentStyle, ...segmentStyles?.[0]}}
          hole={hole}
          width={width}
          height={height}
          start={0.5 + offset}
          end={1 + offset}/>
      </>}
      {/* Render multiple portions as seperate segments */}
      {values.length > 1 && portions.map((portion, i) =>
        <CircleSegment
          key={i}
          fill={colors?.[i % colors?.length]}
          width={width}
          height={height}
          start={portion.start + offset}
          end={portion.end + offset}
          hole={hole}
          style={{...segmentStyle, ...segmentStyles?.[i] }} />
      )}
    </ChartSVG>
  )
}

interface CircleSegmentProps extends React.SVGProps<SVGPathElement> {
  width: number,
  height: number,
  hole: number,
  start: number,
  end: number,
}

const CircleSegment: React.FC<CircleSegmentProps> = ({ width, height, hole=.5, start=0, end=.3, ...props }) => {
  const center = { x: width/2, y: height/2 }
  const radius = Math.min(width, height) / 2
  const innerRadius = radius * hole

  const innerA = {
    x: center.x + Math.cos(start * TAU) * innerRadius,
    y: center.y + Math.sin(start * TAU) * innerRadius,
  }

  const innerB = {
    x: center.x + Math.cos(end * TAU) * innerRadius,
    y: center.y + Math.sin(end * TAU) * innerRadius,
  }

  const outerA = {
    x: center.x + Math.cos(start * TAU) * radius,
    y: center.y + Math.sin(start * TAU) * radius,
  }

  const outerB = {
    x: center.x + Math.cos(end * TAU) * radius,
    y: center.y + Math.sin(end * TAU) * radius,
  }
  
  return  <path d={
    `M${innerA.x} ${innerA.y}
     L${outerA.x} ${outerA.y}
     A${radius} ${radius} 0 ${Number(end - start >= .5)} 1 ${outerB.x} ${outerB.y}
     L${innerB.x} ${innerB.y}
     A${innerRadius} ${innerRadius} 0 ${Number(end - start >= .5)} 0 ${innerA.x} ${innerA.y}`
  } {...props} />
}

export default DonutChart
