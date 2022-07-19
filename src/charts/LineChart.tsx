import { useContext } from 'react'
import { ChartletContext } from '../components/Chartlet'
import ChartSVG from '../components/ChartSVG'
import { GenericChartProps, SamplesProps } from '../types/charts'
import { invertListOfPairsOrRecord } from '../utils/data'
import { makeAlignmentFunctions } from '../utils/layout'

export interface LineChartProps extends GenericChartProps, SamplesProps {
  pathStyle?: React.CSSProperties,
}

const LineChart: React.FC<LineChartProps> = ({
  samples,
  width,
  height,
  pathStyle={},
  ...props
}) => {
  // Resolve dimensions
  const { autoWidth, autoHeight } = useContext(ChartletContext)
  width = width ?? autoWidth
  height = height ?? autoHeight

  // Check data source
  if (!samples)
    throw new Error('Bad data argument: expected samples')

  // Resolve categories/groups
  const [xValues, yValues] = invertListOfPairsOrRecord(samples)

  // Determine element positions
  const [getXPos, getYPos] = makeAlignmentFunctions(xValues, yValues,
    { distribute: false },
    { distribute: false, reverse: true }
  )

  // Create points
  const points = xValues
    .sort((x1, x2) => x1 - x2)
    .map((_, i) => ({
    x: getXPos(xValues[i], width),
    y: getYPos(yValues[i], height),
  }))

  // Generate svg path data
  const pathData = points
    .map(({x, y}, i) =>`${i === 0 ? 'M' : 'L'} ${x} ${y}`)
    .join(' ')

  return <ChartSVG width={width} height={height} {...props}>
    <path d={pathData} fill='none' stroke='red' strokeWidth={3} strokeLinejoin='round' strokeLinecap='round' style={pathStyle}/>
  </ChartSVG>
}

export default LineChart
