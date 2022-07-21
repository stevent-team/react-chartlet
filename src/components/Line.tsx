import { useEffect, useMemo } from 'react'
import { scale } from '../utils'

const Line = ({
  data,
  height,
  width,
  min,
  max,
  top = 0,
  left = 0,
  setPoints,
  ...props
}) => {
  const points = useMemo(() => {
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
    return data.map((y, i) => ({
      value: y,
      x: i*xInterval+left,
      y: height - scale(y, 0, height, lowestPoint, highestPoint) + top
    }))
  }, [data, height, width, top, left, min, max])

  useEffect(() => setPoints(points), [setPoints, points])

  return <path
    d={points.map(({x, y}, i) =>`${i === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ')}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="square"
    {...props}
  />
}

export default Line
