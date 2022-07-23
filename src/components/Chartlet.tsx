import { createContext } from 'react'
import { CategoricalData, ChartColor, GroupedCategoricalData, SeriesData } from '../types/charts'
import { CATEGORICAL } from '../utils/colors'
import Responsive from './Responsive'

export const ChartletContext = createContext({
  // Responsive sizing
  autoWidth: 0,
  autoHeight: 0,
  
  // Context sharing
  colors: undefined,
  categories: undefined,
  groups: undefined,
  series: undefined,
})

interface ChartletProps {
  width?: number | string,
  height?: number | string,
  colors?: ChartColor[],
  categories?: CategoricalData,
  groups?: GroupedCategoricalData,
  series?: SeriesData,
}

const Chartlet: React.FC<ChartletProps> = ({
  width='100%',
  height='100%',
  colors=CATEGORICAL,
  categories,
  groups,
  series,
  children
}) => {
  return <Responsive style={{ width, height }}>
    {({ width: autoWidth, height: autoHeight}) => <ChartletContext.Provider value={{ autoWidth, autoHeight, colors, categories, groups, series }}>
      {children}
    </ChartletContext.Provider>}
  </Responsive>
}

export default Chartlet
