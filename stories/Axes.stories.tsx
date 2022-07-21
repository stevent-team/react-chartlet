import { Axes, BarChart, Chartlet } from '../src'
import { AxesProps } from '../src/components/Axes'
import { generateCategories, generateGroups, generateSamples } from './helpers/generate'

export default { component: Axes }

const Template = args => <Chartlet height={200}><Axes {...args} /></Chartlet>

export const Categories = Template.bind({})
Categories.args = {
  categories: generateCategories(6),
} as AxesProps

export const CategoriesWithHRules = Template.bind({})
CategoriesWithHRules.args = {
  categories: generateCategories(6),
  hRules: true,
} as AxesProps

export const CategoriesWithVRules = Template.bind({})
CategoriesWithVRules.args = {
  categories: generateCategories(6),
  vRules: true,
} as AxesProps

export const CategoriesWithRules = Template.bind({})
CategoriesWithRules.args = {
  categories: generateCategories(6),
  vRules: true,
  hRules: true,
} as AxesProps

export const Samples = Template.bind({})
Samples.args = {
  samples: generateSamples(6),
} as AxesProps

export const SamplesWithRules = Template.bind({})
SamplesWithRules.args = {
  samples: generateSamples(6),
  hRules: true,
  vRules: true,
} as AxesProps

export const SamplesWithRulesSkipEveryOther = Template.bind({})
SamplesWithRulesSkipEveryOther.args = {
  samples: generateSamples(6),
  hRules: true,
  vRules: true,
  xLabelInterval: 2,
} as AxesProps

export const BarChartPlain = args => <Chartlet height={300}><Axes {...args}><BarChart {...args}/></Axes></Chartlet>
BarChartPlain.args = {
  categories: generateCategories(6),
} as AxesProps

export const BarChartWithRules = args => <Chartlet height={300}><Axes {...args}><BarChart {...args}/></Axes></Chartlet>
BarChartWithRules.args = {
  categories: generateCategories(6),
  hRules: true,
} as AxesProps

export const BarChartGroupsWithRules = args => <Chartlet height={300}><Axes {...args}><BarChart {...args}/></Axes></Chartlet>
BarChartGroupsWithRules.args = {
  groups: generateGroups(6),
  hRules: true,
  barSizing: { automatic: true, groupGap: 50 },
}

export const BarChartGroupsLinear = args => <Chartlet height={300}><Axes {...args}><BarChart {...args}/></Axes></Chartlet>
BarChartGroupsLinear.args = {
  groups: Array.from({ length: 10 }, (_v, i) => [`Cat ${i*2+1}`, [i+1, 20-2*i]]),
  barSizing: { automatic: true, groupGap: 50 },
}
