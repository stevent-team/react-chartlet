import Responsive from '../components/Responsive'
import ChartSvg from '../components/ChartSvg'
import { CATEGORICAL } from '../utils/colors'

const TAU = Math.PI * 2

const CircleSegment = ({ width, height, hole=.5, start=0, end=.3, ...props }) => {
  const center = { x: width/2, y: height/2 }
  const radius = Math.min(width, height) / 2
  const innerRadius = radius * hole
  const strokeWidth = radius - innerRadius

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
     A${radius} ${radius} 1 ${Number(end - start > .5)} 1 ${outerB.x} ${outerB.y}
     L${innerB.x} ${innerB.y}
     A${innerRadius} ${innerRadius} 0 ${Number(end - start > .5)} 0 ${innerA.x} ${innerA.y}`
  } {...props} />
}

const Donut = ({
  width,
  height = '100%',
  data = [],
  colors = CATEGORICAL,
  segmentStyle,
  segmentStyles,
  offset=-.25,
  hole=.5,
  ...props
}) => {
  const sum = data.reduce((a, b) => a + b, 0)
  const portions = data.map((x, i) => {
    const previousSum = data.slice(0, i).reduce((a, b) => a + b, 0)
    return { start: previousSum / sum, end: (previousSum + x) / sum }
  })

  return (
    <Responsive style={{ width, height }}>
      {({ width: autoWidth, height: autoHeight }) => (
        <ChartSvg width={autoWidth} height={autoHeight} {...props} >
          {portions.map((portion, i) =>
            <CircleSegment
              key={i}
              fill={colors?.[i % colors?.length]}
              width={autoWidth}
              height={autoHeight}
              start={portion.start + offset}
              end={portion.end + offset}
              hole={hole}
              style={{...segmentStyle, ...segmentStyles?.[i] }} />
          )}
        </ChartSvg>
      )}
    </Responsive>
  )
}

export default Donut
