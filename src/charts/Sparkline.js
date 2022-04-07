import { useState } from 'react'

import Line from '../components/Line'
import Responsive from '../components/Responsive'
import ChartSvg from '../components/ChartSvg'

const Sparkline = ({
  width,
  height = '100%',
  data = [],
  min,
  max,
  lineStyle,
  margin = { top: 5, bottom: 5 },
  tooltip,
  ...props
}) => {
  const marginFallback = typeof margin === 'number' ? margin : 0
  const [points, setPoints] = useState()

  return (
    <Responsive style={{ width, height }}>
      {({ width: autoWidth, height: autoHeight }) => (
        <ChartSvg
          width={autoWidth} height={autoHeight}
          tooltip={{ fn: tooltip, points }} {...props}
        >
          <Line
            top={margin?.top ?? marginFallback}
            left={margin?.left ?? marginFallback}
            data={data}
            setPoints={p => setPoints(p)}
            width={autoWidth - (margin?.right ?? marginFallback)*2}
            height={autoHeight - (margin?.bottom ?? marginFallback)*2}
            min={min}
            max={max}
            style={lineStyle}
          />
        </ChartSvg>
      )}
    </Responsive>
  )
}

export default Sparkline
