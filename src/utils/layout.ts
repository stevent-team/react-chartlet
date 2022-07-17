type XAlignmentFn<X> = (xValue: X, width: number) => number
type YAlignmentFn<Y> = (yValue: Y, height: number) => number

export const makeAlignmentFunctions = <X extends string | number, Y extends string | number>(
  xValues: X[],
  yValues: Y[],
  xOptions = { distribute: false },
  yOptions = { distribute: false },
): [XAlignmentFn<X>, YAlignmentFn<Y>] => {
  // Convert string values to their indexes
  const yNumbers = yValues.map((v, i) => typeof v === 'string' ? i : v as number)
  const xNumbers = xValues.map((v, i) => typeof v === 'string' ? i : v as number)

  // Determine data ranges
  const [yMin, yMax] = [Math.min(...yNumbers), Math.max(...yNumbers)]
  const [xMin, xMax] = [Math.min(...xNumbers), Math.max(...xNumbers)]
  const yRange = yMax - yMin
  const xRange = xMax - xMin
  
  // Return alignment functions
  return [
    (xValue, width) => placeValue(xValue, xValues, xMax, width, xOptions),
    (yValue, height) => placeValue(yValue, yValues, yMax, height, yOptions),
  ]
}

const placeValue = (value, values, max, size, options) => {
  // Resolve non-number values
  let number = value
  if (typeof value !== 'number') {
    const index = values.indexOf(value)
    if (index < 0) throw new Error(`A problem occured determining chart layout: No such value "${value}"`)
    number = index
  }

  if (options.distribute) {
    return size * (number / (max + 1)) + (size / values.length) * .5
  } else {
    return (number / max) * size
  }
}

export const splay = (count: number, x: number) => {
  return count % 2 === 0
    ? x+1 - (count/2+.5)
    : x - Math.floor(count/2)
}
