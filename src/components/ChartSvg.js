const ChartSvg = ({
  width,
  height,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    {...props}
    style={{
      display: 'block',
      boxSizing: 'border-box',
      position: 'absolute',
      inset: 0,
      ...props.style
    }}
  />
)

export default ChartSvg
