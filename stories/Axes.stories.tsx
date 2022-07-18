import { Axes, BarChart, Chartlet } from '../src'
import { AxesProps } from '../src/components/Axes'
import { generateCategories, generateGroups } from './helpers/generate'

export default { component: Axes }

const Template = args => <Chartlet><Axes {...args} /></Chartlet>

export const Categories = Template.bind({})
Categories.args = {
  categories: generateCategories(6),
  height: 200,
} as AxesProps

export const CategoriesWithHRules = Template.bind({})
CategoriesWithHRules.args = {
  categories: generateCategories(6),
  height: 200,
  hRules: true,
} as AxesProps

export const CategoriesWithVRules = Template.bind({})
CategoriesWithVRules.args = {
  categories: generateCategories(6),
  height: 200,
  vRules: true,
} as AxesProps


export const CategoriesWithRules = Template.bind({})
CategoriesWithRules.args = {
  categories: generateCategories(6),
  height: 200,
  vRules: true,
  hRules: true,
} as AxesProps

export const BarChartPlain = args => <Chartlet><Axes {...args}><BarChart {...args}/></Axes></Chartlet>
BarChartPlain.args = {
  categories: generateCategories(6),
  height: 200,
} as AxesProps

export const BarChartWithRules = args => <Chartlet><Axes {...args}><BarChart {...args}/></Axes></Chartlet>
BarChartWithRules.args = {
  categories: generateCategories(6),
  height: 200,
  hRules: true,
} as AxesProps

export const BarChartGroupsWithRules = args => <Chartlet><Axes {...args}><BarChart {...args}/></Axes></Chartlet>
BarChartGroupsWithRules.args = {
  groups: generateGroups(6),
  height: 200,
  hRules: true,
  barSizing: { automatic: true, groupGap: 50 },
}

export const BarChartGroupsLinear = args => <Chartlet><Axes {...args}><BarChart {...args}/></Axes></Chartlet>
BarChartGroupsLinear.args = {
  groups: Array.from({ length: 10 }, (_v, i) => [`Cat ${i*2+1}`, [i+1, 20-2*i]]),
  height: 200,
  barSizing: { automatic: true, groupGap: 50 },
}
