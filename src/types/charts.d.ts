
// Data Types
export type CategoricalData = Record<string, number> | [string, number][]
export type GroupedCategoricalData = Record<string, number[]> | [string, number[]][]
export type DataSamples = [number, number][]

// Prop Types
export interface GenericChartProps extends React.SVGProps<SVGSVGElement> { }
export interface CategoricalProps { categories: CategoricalData }
export interface GroupedCategoricalProps { groups: GroupedCategoricalData }
export interface SampleProps { samples: DataSamples }

// Util Types
export type ChartColor = string
