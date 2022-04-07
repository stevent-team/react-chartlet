import { Donut } from '../src'

export default { component: Donut }

const Template = args => <Donut {...args} />

const generateData = (length = 3) => Array.from({length}, () => Math.floor(Math.random() * 40))
const generateLotsOfData = (length = 15) => Array.from({length}, () => Math.floor(Math.random() * 40))

export const Unstyled = Template.bind({})
Unstyled.args = {
  data: generateData(),
  height: 300,
}

export const PieChart = Template.bind({})
PieChart.args = {
  data: generateData(),
  height: 300,
  hole: 0,
}

export const FiftyFiftyDonut = Template.bind({})
FiftyFiftyDonut.args = {
  data: [1, 1],
  height: 300,
  hole: .5,
}

export const FiftyFiftyOffsetDonut = Template.bind({})
FiftyFiftyOffsetDonut.args = {
  data: [1, 1],
  height: 300,
  hole: .5,
  offset: .25,
}

export const OneCategory = Template.bind({})
OneCategory.args = {
  data: [1],
  height: 300,
}

export const ManyCategories = Template.bind({})
ManyCategories.args = {
  data: generateLotsOfData(),
  height: 300,
}

export const Styled = Template.bind({})
Styled.args = {
  data: generateData(),
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
}

export const SignatureSegment = args => <>
  <svg width={0} height={0}>
    <defs>
      <linearGradient id="myGradient">
        <stop offset="50%"   stop-color="white" />
        <stop offset="100%" stop-color="transparent" />
      </linearGradient>
    </defs>
  </svg>
  <Donut {...args} />
</>
SignatureSegment.args = {
  data: generateData(),
  width: 400,
  height: 400,
  segmentStyles: [null, {
    fill: 'url(#myGradient)',
  }],
  margin: 10,
}
