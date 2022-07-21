import { LineChart, Chartlet, Axes } from '../src'
import { LineChartProps } from '../src/charts/LineChart'
import { generateSamples } from './helpers/generate'

export default { component: LineChart }

const Template = args => <Chartlet height={200}><LineChart {...args} /></Chartlet>

export const Samples = Template.bind({})
Samples.args = {
  samples: generateSamples(6),
} as LineChartProps

export const SamplesWithAxes = args => <Chartlet height={300}><Axes {...args}><LineChart {...args} /></Axes></Chartlet>
SamplesWithAxes.args = {
  samples: generateSamples(6),
  hRules: true,
  vRules: true,
  xLabelInterval: 2,
} as LineChartProps
