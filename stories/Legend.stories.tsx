import { Legend, DonutChart, BarChart, Chartlet, Axes } from '../src'
import { generateCategories, generateGroups } from './helpers/generate'

export default { component: Legend }

const Template = args => <Legend {...args} />

export const Unstyled = Template.bind({})
Unstyled.args = {
  categories: generateCategories(),
  height: 300,
}

export const Groups = Template.bind({})
Groups.args = {
  groups: generateGroups(),
  groupLabels: ['X', 'Y'],
  height: 300,
}

export const Percentages = Template.bind({})
Percentages.args = {
  categories: generateCategories(),
  height: 300,
  percentages: true,
}

export const GroupsPercentages = Template.bind({})
GroupsPercentages.args = {
  groups: generateGroups(),
  groupLabels: ['X', 'Y'],
  percentages: true,
  height: 300,
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

export const WithDonut = args => <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', width: '50%' }}>
  <Chartlet height={250}>
    <DonutChart {...args} />
  </Chartlet>
  <Legend {...args} style={{ fontSize: '1.5rem' }} />
</div>
WithDonut.args = {
  categories: generateCategories(),
}

export const WithDonutStyled = args => <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', width: '50%' }}>
  <Chartlet height={250}>
    <DonutChart {...args} />
  </Chartlet>
  <Legend {...args} style={{ fontSize: '1.5rem', color: 'rebeccapurple', backgroundColor: 'pink' }} />
</div>
WithDonutStyled.args = {
  categories: generateCategories(),
}

export const WithBarChartWithAxis = args => <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', width: '100%' }}>
  <Chartlet height={250}>
    <Axes {...args}>
      <BarChart {...args} />
    </Axes>
  </Chartlet>
  <Legend {...args} style={{ fontSize: '1.1rem', alignSelf: 'start' }} />
</div>
WithBarChartWithAxis.args = {
  groups: generateGroups(),
  groupLabels: ['Left Handed', 'Right Handed'],
  barSizing: { automatic: true, groupGap: 150 },
  hRules: true,
  colors: ['cornflowerblue', 'violet'],
}
