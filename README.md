# 🍩 React Chartlet
![npm version](https://img.shields.io/npm/v/@stevent-team/react-chartlet)
<!-- ![minified size](https://img.shields.io/badge/minified%20size-1.76%20KB-blue) -->

A dead simple and tiny React charting library

> **Warning**
> This package is unstable and still in active development
> You are more than welcome to contribute and make use of it but please
> note that there will be breaking changes

## Installation

```bash
yarn add @stevent-team/react-chartlet
```

## Supported Charts

- [x] DonutChart
- [x] BarChart
- [x] LineChart
- [ ] ScatterChart
- [ ] PercentageChart
- [ ] WordCloud
- [ ] TimeSeries

## Examples

Please note that all charts are responsive by default; they will grow to fill the width of their container, and have height set to `100%`. You can set a specific size on them, however if you don't your chart may not show up due to it's height being 0.
> **TLDR**: If your chart doesn't appear, try setting an explicit height for it or its container 😎

### LineChart

```js
import { Chartlet, LineChart } from '@stevent-team/react-chartlet'

const series = [[0, 0], [1, 4], [2, 3], [3, 5]]

const MyPage = () => (
  <Chartlet series={[series]} height={300}>
    <LineChart />
  </Chartlet>
)
```

### DonutChart

```js
import { Chartlet, DonutChart } from '@stevent-team/react-chartlet'

const MyPage = () => (
  <Chartlet categories={{ A: 10, B: 20 }} height={300}>
    <DonutChart />
  </Chartlet>
)
```

### Legend

> **Note**
> Legends are not rendered using SVGs so they are placed outside of the Chartlet component.
> This allows you to re-style them using flex or grid however you prefer.

```js
import { Chartlet, DonutChart, Legend } from '@stevent-team/react-chartlet'

const categories = { A: 10, B: 20 }

export const MyPage = () =>
  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
    <Chartlet categories={categories} height={250}>
      <DonutChart />
    </Chartlet>
    <Legend categories={categories} />
  </div>
```
## API Reference

### Types

| Data Type | Prop Name | Format | Example | Supported Charts |
| --------- | --------- | ------ | ------- | ---------------- |
| CategoricalData | `categories` | `Record<string, number>` | `{ a: 1 }` | `DonutChart`, `BarChart` |
| GroupedCategoricalData | `groups` | `Record<string, number[]>` | `{ a: [1, 2] }` | `BarChart` |
| SeriesData | `series` | `[number, number][][]` | `[[[0, 0], [1, 1]]]` | `LineChart` |

### Context

Data props are shared to charts in the `<Chartlet/>` component using a context. However the `<Legend/>` should not be placed in a `<Chartlet>` and so must be explicitly passed data.

### Generic Chart

The `<GenericChart />` component allows dynamically choosing between different chart components using a `type` prop.

```jsx
const DynamicChart = ({ data }) =>
  <Chartlet>
    <GenericChart type={data.isCategorical ? 'bar' : 'line'} />
  </Chartlet>
```

## Docs

> **Note**
> Coming soon...
> (in the short term, check out the prop interfaces for each chart)

## Development

To test the components in this library, follow the steps below:

1. Clone the repo onto your machine
2. Run `yarn` to install dependencies
3. Run `yarn storybook` to start Storybook

You can set up stories to test components using [this documentation](https://storybook.js.org/docs/react/writing-stories/introduction)

## Contributing

Issue contributions are greatly welcomed and appreciated!

For now, PR contributions are temporarily closed while `react-chartlet` remains unstable. Thank you for your patience :)

## License

`react-chartlet` is licensed under MIT

*Created with love by the [Stevent Team](https://stevent.club)* 💙
