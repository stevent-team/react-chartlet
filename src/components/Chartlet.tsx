import { createContext } from 'react'
import Responsive from './Responsive'

export const ChartletContext = createContext({ autoWidth: 0, autoHeight: 0 })

const Chartlet: React.FC = ({ children }) => {
  return <Responsive>
    {({ width: autoWidth, height: autoHeight}) => <ChartletContext.Provider value={{ autoWidth, autoHeight }}>
      {children}
    </ChartletContext.Provider>}
  </Responsive>
}

export default Chartlet
