import { LineChart, Chartlet, Axes } from '../src'
import { LineChartProps } from '../src/charts/LineChart'
import { generateSeries } from './helpers/generate'

export default { component: LineChart }

const Template = args => <Chartlet height={200}><LineChart {...args} /></Chartlet>

export const SingleSeries = Template.bind({})
SingleSeries.args = {
  series: generateSeries(1, 6),
} as LineChartProps

export const MultipleSeries = Template.bind({})
MultipleSeries.args = {
  series: generateSeries(2, 6),
} as LineChartProps

export const SingleSeriesWithAxes = args => <Chartlet height={300}><Axes {...args}><LineChart {...args} /></Axes></Chartlet>
SingleSeriesWithAxes.args = {
  series: generateSeries(1, 6),
  hRules: true,
  vRules: true,
  xLabelInterval: 2,
} as LineChartProps

export const MultipleSeriesWithAxes = args => <Chartlet height={300}><Axes {...args}><LineChart {...args} /></Axes></Chartlet>
MultipleSeriesWithAxes.args = {
  series: generateSeries(2, 6),
  hRules: true,
  vRules: true,
  xLabelInterval: 2,
} as LineChartProps

export const SeriesStyledWithAxes = args => <Chartlet height={300}><Axes {...args}><LineChart {...args} /></Axes></Chartlet>
SeriesStyledWithAxes.args = {
  series: generateSeries(2, 6),
  hRules: true,
  vRules: true,
  xLabelInterval: 2,
  pathStyle: { strokeWidth: 4 },
  pathStyles: [{

  }, { strokeDasharray: 10 }],
} as LineChartProps
