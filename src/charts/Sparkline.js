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
  ...props
}) => {
  const marginFallback = typeof margin === 'number' ? margin : 0

  return (
    <Responsive style={{ width, height }}>
      {({ width: autoWidth, height: autoHeight }) => (
        <ChartSvg width={autoWidth} height={autoHeight} {...props} >
          <Line
            top={margin?.top ?? marginFallback}
            left={margin?.left ?? marginFallback}
            data={data}
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
