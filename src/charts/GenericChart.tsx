import BarChart, { BarChartProps } from './BarChart'
import DonutChart, { DonutChartProps } from './DonutChart'
import LineChart, { LineChartProps } from './LineChart'

type GenericChartProps = BarChartProps & LineChartProps & DonutChartProps & { type: ChartType }
type ChartType = 'bar' | 'donut' | 'line'

const GenericChart: React.FC<GenericChartProps> = ({ type, ...props }) => {
  if (type === 'bar')
    return <BarChart {...props} />
  if (type === 'donut')
    return <DonutChart {...props} />
  if (type === 'line')
    return <LineChart {...props} />
}

export default GenericChart
