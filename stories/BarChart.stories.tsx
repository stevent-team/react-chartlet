import { BarChart, Chartlet } from '../src'
import { BarChartProps } from '../src/charts/BarChart'
import { generateCategories, generateGroups } from './helpers/generate'

export default { component: BarChart }

const Template = args => <Chartlet height={200}><BarChart {...args} /></Chartlet>

export const Categories = Template.bind({})
Categories.args = {
  categories: generateCategories(6),
  barSizing: { automatic: true, groupGap: 60 }
} as BarChartProps

export const LinearData = Template.bind({})
LinearData.args = {
  categories: Array.from({ length: 10 }, (_v, i) => [`Cat ${i+1}`, i+1]),
  barSizing: { automatic: true, groupGap: 60 }
} as BarChartProps

export const LinearGroups = Template.bind({})
LinearGroups.args = {
  groups: Array.from({ length: 10 }, (_v, i) => [`Cat ${i+1}`, [i+1, 10-i]]),
  barSizing: { automatic: true, groupGap: 40 }
} as BarChartProps

export const Groups = Template.bind({})
Groups.args = {
  groups: generateGroups(6),
  barGap: 5,
  barSizing: { automatic: true, groupGap: 80 }
} as BarChartProps

export const BigGroups = Template.bind({})
BigGroups.args = {
  groups: generateGroups(6, 4),
  barSizing: { automatic: true, groupGap: 60 }
} as BarChartProps
