import { BarChart, Chartlet } from '../src'
import { BarChartProps } from '../src/charts/BarChart'
import { generateCategories, generateGroups } from './helpers/generate'

export default { component: BarChart }

const Template = args => <Chartlet height={200}><BarChart {...args} /></Chartlet>

export const Categories = Template.bind({})
Categories.args = {
  categories: generateCategories(6),
  groupBarSpacing: 10,
  barWidth: { min: 15, max: 500, gap: 30 },
} as BarChartProps

export const LinearData = Template.bind({})
LinearData.args = {
  categories: Array.from({ length: 10 }, (_v, i) => [`Cat ${i+1}`, i+1]),
  groupBarSpacing: 10,
  barWidth: { min: 15, max: 500, gap: 30 },
} as BarChartProps

export const LinearGroups = Template.bind({})
LinearGroups.args = {
  groups: Array.from({ length: 10 }, (_v, i) => [`Cat ${i+1}`, [i+1, 10-i]]),
  groupBarSpacing: 10,
  barWidth: { min: 15, max: 500, gap: 30 },
} as BarChartProps

export const Groups = Template.bind({})
Groups.args = {
  groups: generateGroups(6),
  groupBarSpacing: 10,
  barWidth: { min: 15, max: 500, gap: 30 },
} as BarChartProps

export const BigGroups = Template.bind({})
BigGroups.args = {
  groups: generateGroups(6, 4),
  groupBarSpacing: 10,
  barWidth: { min: 15, max: 500, gap: 30 },
} as BarChartProps
