import { scale } from '../utils'

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
  // Show line even if only one datapoint is provided
  if (data.length === 1) {
    data = [...data, ...data]
  }

  const xInterval = width / (data.length-1)
  const lowestPoint = min ?? Math.min(...data)
  let highestPoint = max ?? Math.max(...data)
  if (highestPoint === lowestPoint) {
    highestPoint = lowestPoint+1
  }

  // Calculate line data
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
