import { Sparkline } from '../src'

export default { component: Sparkline }

const Template = args => <Sparkline {...args} />

const generateData = (length = 20) => Array.from({length}, () => Math.floor(Math.random() * 40))

export const Unstyled = Template.bind({})
Unstyled.args = {
  data: generateData(),
  height: 100,
}

export const Tooltip = args => <Sparkline data={[0,2,8,3,6,3,6]} height="100px" tooltip={{
  handle: point => {
    const tooltip = document.getElementById('rc-tooltip') || document.createElement('div')
    tooltip.id = 'rc-tooltip'
    tooltip.style.position = 'fixed'
    console.log(point)
    tooltip.style.top = point.y + 'px'
    tooltip.style.left = point.x + 'px'
    tooltip.style.background = 'white'
    tooltip.style.padding = '.3em'
    tooltip.style.fontFamily = 'sans-serif'
    tooltip.style.border = '2px solid rebeccapurple'
    tooltip.style.borderRadius = '5px'
    tooltip.innerHTML = point.value
    if (!document.body.contains(tooltip)) document.body.append(tooltip)
  },
  close: () => {
    document.getElementById('rc-tooltip')?.remove()
  },
}} {...args} />

export const FillContainer = args => <div style={{ width: '50%', height: '50px', margin: 'auto' }}>
  <Sparkline {...args} />
</div>
FillContainer.args = {
  data: generateData(),
}

export const FixedWidth = Template.bind({})
FixedWidth.args = {
  data: generateData(),
  width: 500,
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

export const FlatLine = Template.bind({})
FlatLine.args = {
  data: [1],
  height: 100
}
