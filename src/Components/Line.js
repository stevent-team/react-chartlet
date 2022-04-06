const scale = (number, min, max, lowest, highest) => (max-min)*(number-lowest)/(highest-lowest)+min

const Line = ({
  data,
  height,
  width,
  min,
  max,
  top = 0,
  left = 0,
  ...props
}) => {
  const xInterval = width / (data.length-1)
  const lowestPoint = min ?? Math.min(...data)
  const highestPoint = max ?? Math.max(...data)

  const d = data.map((y, i) =>
    `${i === 0 ? 'M' : 'L'} ${i*xInterval+left} ${height - scale(y, 0, height, lowestPoint, highestPoint) + top}`
  ).join(' ')

  return <path
    d={d}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="square"
    {...props}
  />
}

export default Line
