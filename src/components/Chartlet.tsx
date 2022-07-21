import { createContext } from 'react'
import Responsive from './Responsive'

export const ChartletContext = createContext({ autoWidth: 0, autoHeight: 0 })

interface ChartletProps {
  width?: number | string,
  height?: number | string,
}

const Chartlet: React.FC<ChartletProps> = ({ width='100%', height='100%', children }) => {
  return <Responsive style={{ width, height }}>
    {({ width: autoWidth, height: autoHeight}) => <ChartletContext.Provider value={{ autoWidth, autoHeight }}>
      {children}
    </ChartletContext.Provider>}
  </Responsive>
}

export default Chartlet
