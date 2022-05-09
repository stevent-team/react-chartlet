import { Legend } from '../src'
import { Donut } from '../src'

export default { component: Legend }

const Template = args => <Legend {...args} />

const generateData = (length = 3) => Array.from({length}, () => Math.floor(Math.random() * 40))

export const Unstyled = Template.bind({})
const unstyledData = generateData()
Unstyled.args = {
  data: unstyledData,
  labels: unstyledData.map((x, i) => `Category ${i+1}`),
  height: 300,
}

export const WithDonut = args => <div style={{ display: 'flex', gap: '2em' }}>
  <Donut {...args} width={200} />
  <Legend {...args} />
</div>
const withDonutData = generateData()
WithDonut.args = {
  data: withDonutData,
  labels: withDonutData.map((x, i) => `Category ${i+1}`),
  height: 300,
}

export const WithDonutStyled = args => <div style={{ display: 'flex', gap: '2em' }}>
  <Donut {...args} width={200} />
  <Legend {...args} style={{ color: 'rebeccapurple', 'background': 'pink', fontSize: '1.3rem' }} />
</div>
const withDonutStyledData = generateData()
WithDonutStyled.args = {
  data: withDonutStyledData,
  labels: withDonutStyledData.map((x, i) => `Category ${i+1}`),
  height: 300,
}
