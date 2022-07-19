import { cloneElement, Children, ReactElement } from 'react'
import ChartSVG from './ChartSVG'
import { CategoricalProps, GroupedCategoricalProps, SampleProps } from '../types/charts'
import { invertListOfPairsOrRecord } from '../utils/data'
import { makeAlignmentFunctions, calculateTicks, chooseReasonableTick } from '../utils/layout'
import { useContext } from 'react'
import { ChartletContext } from './Chartlet'

const DESIRED_TICKS_PER_PIXEL = 75

type Side = 'top' | 'bottom' | 'left' | 'right'
export interface AxesProps extends CategoricalProps, GroupedCategoricalProps, SampleProps {
  width: number,
  height: number,
  hRules: boolean,
  vRules: boolean,
  xLabelInterval?: number,
  yLabelInterval?: number,
  xTickInterval?: number,
  yTickInterval?: number,
  ruleStyle?: React.CSSProperties,
  ruleColor?: string,
  labelStyle?: React.CSSProperties,
  // xLabels: boolean | Side[],
  // yLabels: boolean | Side[],
}

const Axes: React.FC<AxesProps> = ({
  samples,
  categories,
  groups,
  width,
  height,
  hRules,
  vRules,
  yTickInterval,
  xTickInterval,
  xLabelInterval=1,
  yLabelInterval=1,
  ruleColor='#bbb',
  ruleStyle={},
  labelStyle={},
  children,
  ...props
}) => {
  const chartletContext = useContext(ChartletContext)
  const { autoWidth, autoHeight } = chartletContext
  width = width ?? autoWidth
  height = height ?? autoHeight

  // // Determine label sides
  // xLabels = xLabels === true ? ['right'] : xLabels
  // yLabels = yLabels === true ? ['bottom'] : yLabels

  // Must have only one data source
  if (Number(samples) + Number(categories) + Number(groups) > 1)
    throw new Error('Bad input error: Must only provide one input source.')

  // Determine ticks
  let [xTicks, yTicks] = [[], []]
  let [xMax, yMax] = [undefined, undefined]
  let distributeX = true
  if (categories) {
    const [labels, values] = invertListOfPairsOrRecord(categories)
    const yTick = yTickInterval ?? chooseReasonableTick(values, height / DESIRED_TICKS_PER_PIXEL)
    yMax = Math.ceil(Math.max(...values) / yTick) * yTick
    xTicks = labels
    yTicks = calculateTicks(values, yTick)
  }

  if (groups) {
    const [labels, values] = invertListOfPairsOrRecord(groups)
    const yTick = yTickInterval ?? chooseReasonableTick(values.flat(1), height / DESIRED_TICKS_PER_PIXEL)
    yMax = Math.ceil(Math.max(...values.flat(1))/yTick) * yTick
    xTicks = labels
    yTicks = calculateTicks(values.flat(1), yTick)
  }

  if (samples) {
    const [xValues, yValues] = invertListOfPairsOrRecord(samples)
    const xTick = xTickInterval ?? chooseReasonableTick(xValues, width / DESIRED_TICKS_PER_PIXEL)
    const yTick = yTickInterval ?? chooseReasonableTick(yValues, height / DESIRED_TICKS_PER_PIXEL)
    xMax = Math.ceil(Math.max(...xValues)/xTick)*xTick
    yMax = Math.ceil(Math.max(...yValues)/yTick)*yTick
    xTicks = calculateTicks(xValues, xTick)
    yTicks = calculateTicks(yValues, yTick)
    distributeX = false
  } 

  // Make alignment functions
  const [getXPos, getYPos] = makeAlignmentFunctions(xTicks, yTicks,
    { distribute: distributeX, max: xMax },
    { distribute: false, reverse: true, max: yMax },
  )

  const labelGutterHeight = 40
  const labelGutterWidth = 40
  const topMargin = 40
  const leftMargin = 40

  const innerWidth = Math.max(0, width - (labelGutterWidth + leftMargin))
  const innerHeight = Math.max(0, height - (labelGutterWidth + topMargin))

  return (
    <ChartSVG width={width} height={height} {...props}>
      {/* Labels */}
      {xTicks.map((xTick, i) => {
        const x = getXPos(xTick, innerWidth) - (innerWidth/xTicks.length)/2 + leftMargin
        if (i % xLabelInterval !== 0) return null
        return <foreignObject
          key={xTick}
          x={x}
          y={innerHeight+topMargin}
          width={innerWidth/xTicks.length}
          height={labelGutterHeight}>
            <div style={{
              height: labelGutterHeight,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'sans-serif',
              ...labelStyle
            }}>{String(xTick)}</div>
        </foreignObject>
      })} 

      {yTicks.map((yTick, i) => {
        const y = getYPos(yTick, innerHeight) - (innerHeight/yTicks.length)/2 + topMargin
        if (i % yLabelInterval !== 0) return null
        return <foreignObject
          key={yTick}
          x={innerWidth+leftMargin}
          y={y}
          width={labelGutterWidth}
          height={innerHeight/yTicks.length}>
            <div style={{
              height: innerHeight/yTicks.length,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'sans-serif',
              ...labelStyle
            }}>{String(yTick)}</div>
        </foreignObject>
      })}

      {/* Rules */}
      {hRules && yTicks.map(yTick => <HRule key={yTick} x1={leftMargin} x2={innerWidth+leftMargin} y={getYPos(yTick, innerHeight) + topMargin} stroke={ruleColor} {...ruleStyle} /> )}
      {vRules && xTicks.map(xTick => (getXPos(xTick, innerWidth) <= innerWidth) && <VRule key={xTick} y1={topMargin} y2={innerHeight+topMargin} x={getXPos(xTick, innerWidth) + leftMargin} stroke={ruleColor} {...ruleStyle} /> )}

      {/* Render Chart */}
      {Children.map(children, child => cloneElement(child as ReactElement, {
        width: innerWidth,
        height: innerHeight,
        y: topMargin,
        x: leftMargin,
      }))}
    </ChartSVG>
  )
}

const HRule = ({ x1, x2, y, ...props }) => <line x1={x1} x2={x2} y1={y} y2={y} {...props} />
const VRule = ({ y1, y2, x, ...props }) => <line x1={x} x2={x} y1={y1} y2={y2} {...props} />

export default Axes
