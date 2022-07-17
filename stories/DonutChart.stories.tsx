import { DonutChart } from '../src'
import { DonutChartProps } from '../src/charts/DonutChart'
import { generateCategories } from './helpers/generate'

export default { component: DonutChart }

const Template = args => <DonutChart {...args} />

export const Unstyled = Template.bind({})
Unstyled.args = {
  categories: generateCategories(),
  height: 300,
} as DonutChartProps

export const PieChart = Template.bind({})
PieChart.args = {
  categories: generateCategories(),
  height: 300,
  hole: 0,
} as DonutChartProps

export const FiftyFiftyDonut = Template.bind({})
FiftyFiftyDonut.args = {
  categories: { 'a': 1, 'b': 1 },
  height: 300,
  hole: .5,
} as DonutChartProps

export const FiftyFiftyOffsetDonut = Template.bind({})
FiftyFiftyOffsetDonut.args = {
  categories: { 'a': 1, 'b': 1 },
  height: 300,
  hole: .5,
  offset: .25,
} as DonutChartProps

export const OneCategory = Template.bind({})
OneCategory.args = {
  categories: { 'a': 1 },
  height: 300,
} as DonutChartProps

export const ManyCategories = Template.bind({})
ManyCategories.args = {
  categories: generateCategories(15),
  height: 300,
} as DonutChartProps

export const Styled = Template.bind({})
Styled.args = {
  categories: generateCategories(),
  width: 400,
  height: 400,
  style: { border: '4px solid rebeccapurple', background: 'mistyrose'},
  segmentStyle: {
    stroke: 'rebeccapurple',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 4,
  },
  margin: 10,
} as DonutChartProps

export const SignatureSegment = args => <>
  <svg width={0} height={0}>
    <defs>
      <linearGradient id="myGradient">
        <stop offset="50%" stopColor="white" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
  </svg>
  <DonutChart {...args} />
</>
SignatureSegment.args = {
  categories: generateCategories(),
  width: 400,
  height: 400,
  segmentStyles: [null, {
    fill: 'url(#myGradient)',
  }],
  margin: 10,
} as DonutChartProps
