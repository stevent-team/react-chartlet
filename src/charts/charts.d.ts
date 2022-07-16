
// Data Types
export type CategoricalData = Record<string, number>
export type DataSamples = [number, number][]

// Prop Types
export interface GenericChartProps extends React.SVGProps<SVGSVGElement> {
  colors?: ChartColor[],
}

export interface CategoricalProps { categories: CategoricalData }
export interface SampleProps { samples: DataSamples }

// Util Types
export type ChartColor = string
