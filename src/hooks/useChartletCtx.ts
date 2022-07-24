import { useContext } from 'react'
import { ChartletContext } from '../components/Chartlet'
import { CategoricalData, ChartColor, GroupedCategoricalData, SeriesData } from '../types/charts'

interface ChartletContextValue {
  width: number,
  height: number,
  colors: ChartColor[],
  categories?: CategoricalData,
  groups?: GroupedCategoricalData,
  series?: SeriesData,
}

const useChartletCtx = (props): ChartletContextValue => {
  const { autoWidth, autoHeight, colors, groups, categories, series } = useContext(ChartletContext)
  return {
    width: props.width ?? autoWidth,
    height: props.height ?? autoHeight,
    colors: props.colors ?? colors,
    groups: props.groups ?? groups,
    series: props.series ?? series,
    categories: props.categories ?? categories,
  }
}

export default useChartletCtx
