import Line from '../components/Line'
import Responsive from '../components/Responsive'

const Sparkline = ({
  width,
  height = 100,
  data = [],
  min,
  max,
  lineStyle,
  margin = { top: 5, bottom: 5 },
  ...props
}) => {
  const marginFallback = typeof margin === 'number' ? margin : 0

  return (
    <Responsive width={width} height={height}>
      {({ width, height }) => <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        {...props}
        style={{display: 'block', boxSizing: 'border-box', ...props.style}}
      >
        <Line
          top={margin?.top ?? marginFallback}
          left={margin?.left ?? marginFallback}
          data={data}
          width={width - (margin?.right ?? marginFallback)*2}
          height={height - (margin?.bottom ?? marginFallback)*2}
          min={min}
          max={max}
          style={lineStyle}
        />
      </svg>}
    </Responsive>
  )
}

export default Sparkline
