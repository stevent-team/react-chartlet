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

export const ManyCategories = Template.bind({})
ManyCategories.args = {
  data: generateLotsOfData(),
  height: 300,
}

export const Styled = Template.bind({})
Styled.args = {
  data: generateData(),
  width: 400,
  height: 100,
  style: { border: '4px solid rebeccapurple', background: 'mistyrose' },
  lineStyle: {
    stroke: 'rebeccapurple',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 4,
  },
  margin: 10,
}

export const FlatLine = Template.bind({})
FlatLine.args = {
  data: [1],
  height: 300
}
