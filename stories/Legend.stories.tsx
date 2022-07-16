import { Legend, DonutChart } from '../src'
import { generateCategories } from './helpers/generateCategories'

export default { component: Legend }

const Template = args => <Legend {...args} />

export const Unstyled = Template.bind({})
Unstyled.args = {
  categories: generateCategories(),
  height: 300,
}

export const Percentages = Template.bind({})
Percentages.args = {
  categories: generateCategories(),
  height: 300,
  percentages: true,
}

export const NoBullets = Template.bind({})
NoBullets.args = {
  categories: generateCategories(),
  height: 300,
  bullets: false,
}

export const PercentagesNoBullets = Template.bind({})
PercentagesNoBullets.args = {
  categories: generateCategories(),
  height: 300,
  percentages: true,
  bullets: false,
}

export const WithDonut = args => <div style={{ display: 'flex', gap: '2em' }}>
  <DonutChart {...args} width={200} />
  <Legend {...args} />
</div>
WithDonut.args = {
  categories: generateCategories(),
  height: 300,
}

export const WithDonutStyled = args => <div style={{ display: 'flex', gap: '2em' }}>
  <DonutChart {...args} width={200} />
  <Legend {...args} style={{ color: 'rebeccapurple', backgroundColor: 'pink', fontSize: '1.3rem' }} />
</div>
WithDonutStyled.args = {
  categories: generateCategories(),
  height: 300,
}
