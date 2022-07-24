import { Chartlet, GenericChart } from '../src'
import { generateCategories, generateSeries, } from './helpers/generate'

export default { component: GenericChart }

const Template = args => <Chartlet height={200}><GenericChart {...args} /></Chartlet>

export const AsBarChart = Template.bind({})
AsBarChart.args = {
  type: 'bar',
  categories: generateCategories(5),
}

export const AsLineChart = Template.bind({})
AsLineChart.args = {
  type: 'line',
  series: generateSeries(2, 5),
}
