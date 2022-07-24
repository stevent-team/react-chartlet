
// Data Types
export type CategoricalData = Record<string, number> | [string, number][]
export type GroupedCategoricalData = Record<string, number[]> | [string, number[]][]
export type SeriesData = [number, number][][]

// Prop Types
export interface GenericChartProps extends React.SVGProps<SVGSVGElement> {
  width?: number,
  height?: number,
}
export interface CategoricalProps { categories?: CategoricalData }
export interface GroupedCategoricalProps { groups?: GroupedCategoricalData }
export interface SeriesProps { series?: SeriesData }

// Util Types
export type ChartColor = string
