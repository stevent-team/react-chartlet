type XAlignmentFn<X> = (xValue: X, width: number) => number
type YAlignmentFn<Y> = (yValue: Y, height: number) => number

type AlignmentOptions = {
  distribute?: boolean,
  reverse?: boolean,
  max?: number | undefined
}

export const makeAlignmentFunctions = <X extends string | number, Y extends string | number>(
  xValues: X[],
  yValues: Y[],
  xOptions: AlignmentOptions = { distribute: false, reverse: false, max: undefined },
  yOptions: AlignmentOptions = { distribute: false, reverse: false, max: undefined },
): [XAlignmentFn<X>, YAlignmentFn<Y>] => {
  // Convert string values to their indexes
  const yNumbers = yValues.map((v, i) => typeof v === 'string' ? i : v as number)
  const xNumbers = xValues.map((v, i) => typeof v === 'string' ? i : v as number)
  
  // Return alignment functions
  return [
    (xValue, width) => placeValue(xValue, xValues, xOptions.max ?? Math.max(...xNumbers), width, xOptions),
    (yValue, height) => placeValue(yValue, yValues, yOptions.max ?? Math.max(...yNumbers), height, yOptions),
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

  if (options.reverse)
    number = max - number

  if (options.distribute) {
    return size * (number / (max + 1)) + (size / values.length) * .5
  } else {
    return ((number / max) * size)
  }
}

export const splay = (count: number, x: number) => {
  return count % 2 === 0
    ? x+1 - (count/2+.5)
    : x - Math.floor(count/2)
}

export const calculateTicks = (numbers: number[], interval: number): number[] => {
  const min = Math.min(...numbers)
  const max = Math.max(...numbers)
  const range = max - min

  // TEMP: return 10s
  const bottom = 0
  const top = Math.ceil(max/interval)*interval
  const num = (top - bottom)/interval + 1
  return Array.from({ length: num }, (_, i) => bottom + i*interval)
}

export const chooseReasonableTick = (numbers: number[], desiredCount=10): number => {
  const max = Math.max(...numbers)
  const odds = [.2, .5, 1, 2, 5, 20, 50]
  const tens = Array.from({ length: 20 }, (_, i) => Math.abs(i-10) > 2 && parseFloat(`1e${i-10}`))
    .filter(x => x)
    .flatMap(x => Array.from({ length: 5 }, (_, i) => x * i))
  const res = [...odds, ...tens]
    .map(tick => [tick, Math.pow((max / tick) - desiredCount, 2)])
    .sort((a, b) => a[1] - b[1])
    .map(([x]) => x)
  return res?.[0] ?? 5
}
