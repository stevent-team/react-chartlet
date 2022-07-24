import { Chartlet, BarChart, LineChart, Axes } from '../src'
import { generateGroups, generateSeries } from './helpers/generate'

export default { }

export const UsingBarChart = args => <Chartlet  {...args} height={250}><Axes hRules><BarChart {...args}/></Axes></Chartlet>
UsingBarChart.args = {
  groups: generateGroups(2),
  colors: ['red', 'green', 'yellow', 'blue', 'orange'],
}

export const UsingLineChart = args => <Chartlet  {...args} height={250}><Axes hRules><LineChart {...args}/></Axes></Chartlet>
UsingLineChart.args = {
  series: generateSeries(3, 6),
  colors: ['red', 'green', 'purple', 'blue', 'orange'],
}
