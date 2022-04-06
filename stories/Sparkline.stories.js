import { Sparkline } from '../src'

export default { component: Sparkline }

const Template = args => <Sparkline {...args} />

const generateData = (length = 20) => Array.from({length}, () => Math.floor(Math.random() * 40))

export const Unstyled = Template.bind({})
Unstyled.args = {
  data: generateData(),
}

export const Wide = Template.bind({})
Wide.args = {
  data: generateData(50),
  width: 400,
  height: 50,
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
