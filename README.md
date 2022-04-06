# React Chartlet
![npm version](https://img.shields.io/npm/v/react-chartlet)
![minified size](https://img.shields.io/badge/minified%20size-455%20B-blue)

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

### Sparkline

```js
import { Sparkline } from 'react-chartlet'

const YourPage = () => (
  <Sparkline
    data={[2, 5, 3, 8, 1]}
    width={200}
    height={100}
  />
)

export default YourPage
```

### Responsive chart

You can use the `Responsive` element to make your chart match the size of it's parent container. `Responsive` returns a function with it's own boundingClientRect object as a parameter; you can use this to set the width (or height) of the chart inside.

Note that setting the height from the parent rect is only advisable if you're using a flex or grid layout.

```js
import { Responsive, Sparkline } from 'react-chartlet'

const YourPage = () => (
  <Responsive>
    {({ width }) => <Sparkline
      data={[2, 5, 3, 8, 1]}
      width={width}
      height={100}
    />}
  </Responsive>
)

export default YourPage
```

## API Reference

### Sparkline

| Property | Type | Default | Description |
| - | - | - | - |
| data | array | `[]` | An array of numbers |
| width | number | `200` | Width of your chart |
| height | number | `100` | Height of your chart |
| min | number | smallest datapoint in `data` array | The minimum value on the y axis |
| max | number | largest datapoint in `data` array | The maximum value on the y axis |
| margin | number or object | `{ top: 5, bottom: 5 }` | Margin between the border of the chart and the line, either as a number to set all sides, or an object to set specific sides, like `{ top: 5, right: 5, bottom: 5, left: 5 }` |
| style | object | `{}` | Directly set the style object of the svg container |
| lineStyle | object | `{}` | Set the style object of the line |

## Development

To test the components in this library, follow the steps below:

1. Clone the repo onto your machine
2. Run `yarn` to install dependencies
3. Run `yarn storybook` to start Storybook

You can set up stories to test components using [this documentation](https://storybook.js.org/docs/react/writing-stories/introduction)
