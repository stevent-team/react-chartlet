import Line from '../components/Line'

const Sparkline = ({
  width = 200,
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
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      {...props}
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
    </svg>
  )
}

export default Sparkline
