# React Chartlet
![npm version](https://img.shields.io/npm/v/react-chartlet)
![minified size](https://img.shields.io/badge/minified%20size-730%20B-blue)

A dead simple and tiny React charting library

## Installation

```bash
yarn add react-chartlet
```

## Supported Charts

- [x] Sparkline
- [ ] Pie
- [ ] Bar
- [ ] Line

## Examples

Please note that all charts are responsive by default; they will grow to fill the width of their container, and have height set to `100%`. You can set a specific size on them, however if you don't your chart may not show up due to it's height being 0.

### Sparkline

```js
import { Sparkline } from 'react-chartlet'

const YourPage = () => (
  <Sparkline
    data={[2, 5, 3, 8, 1]}
    height="100px"
  />
)

export default YourPage
```

### Donut

```js
import { Donut } from 'react-chartlet'

const MyPage = () => (
  <Donut
    data={[2, 5, 3]}
    height="100px"
  />
)

export default YourPage
```
## API Reference

### Sparkline

| Property | Type | Default | Description |
| - | - | - | - |
| data | array | `[]` | An array of numbers |
| width | string | - | CSS width of your chart |
| height | string | `100%` | CSS height of your chart |
| min | number | smallest datapoint in `data` array | The minimum value on the y axis |
| max | number | largest datapoint in `data` array | The maximum value on the y axis |
| margin | number or object | `{ top: 5, bottom: 5 }` | Margin between the border of the chart and the line, either as a number to set all sides, or an object to set specific sides, like `{ top: 5, right: 5, bottom: 5, left: 5 }` |
| style | object | `{}` | Directly set the style object of the svg container |
| lineStyle | object | `{}` | Set the style object of the line |

### Donut

| Property | Type | Default | Description |
| - | - | - | - |
| data | array | `[]` | An array of numbers |
| width | string | - | CSS width of your chart |
| height | string | `100%` | CSS height of your chart |
| colors | string | `CATEGORICAL` | CSS colours used for each data point |
| style | object | `{}` | Directly set the style object of the svg container |
| offset | number | 0 | Set the rotation offset between 0 and 1 |
| hole | number | 0.5 | Portion of the diameter used for each segments inner radius |
| segmentStyle | object | `{}` | Set the style object of all donut segments |
| segmentStyles | array | - | Set the styles used for each donut segments |

## Development

To test the components in this library, follow the steps below:

1. Clone the repo onto your machine
2. Run `yarn` to install dependencies
3. Run `yarn storybook` to start Storybook

You can set up stories to test components using [this documentation](https://storybook.js.org/docs/react/writing-stories/introduction)
