import ChartSVG from '../components/ChartSVG'
import { CategoricalProps, GenericChartProps, GroupedCategoricalProps, ChartColor } from '../types/charts'
import { splitGroups, categoriesToGroups } from '../utils/data'
import { makeAlignmentFunctions, splay } from '../utils/layout'
import useChartletCtx from '../hooks/useChartletCtx'

export interface BarChartProps extends GenericChartProps, CategoricalProps, GroupedCategoricalProps {
  colors?: ChartColor[],
  barWidth?: number | { min: number, max: number, gap: number },
  groupBarSpacing?: number,
  barRadius?: number,
}

/**
 * @note
 * An ungrouped barchart is kind of like a grouped barchart w/ group sizes of 1. For this reason,
 * all barcharts are actually grouped barcharts and categorical data is transformed into grouped categorical data.
 */
const BarChart: React.FC<BarChartProps> = ({
  barWidth = { min: 20, max: 300, gap: 30 },
  groupBarSpacing = 5,
  barRadius = 8,
  ...props
}) => {
  const { width, height, colors, groups, categories } = useChartletCtx(props)

  // Validate mutual exclusion between groups and categories
  if (categories && groups)
    throw new Error('Bad data argument: `categories` and `groups` are mutually exclusive. Only supply one')

  // Resolve categories/groups
  const [labels, valueLists] = splitGroups(groups ?? categoriesToGroups(categories))
  const items = valueLists.map((_, i) => ({
    label: labels[i],
    values: valueLists[i],
    colors: colors.slice(0, labels.length)
  }))

  // Determine element positions
  const [getXPos, getYPos] = makeAlignmentFunctions(labels, valueLists.flat(1),
    { distribute: true },
    { distribute: false }
  )

  // Determine bar sizes
  const getBarWidth = (width: number) => {
    // Manual sizing
    if (typeof barWidth === 'number')
      return barWidth
    
    // Determine space required for groupBarSpacing
    const groupCount = items.length
    const barCount = items.length * valueLists[0].length
    const gapsPerGroup = Math.max(0, valueLists[0].length - 1)
    const groupBarSpacingWidth = groupBarSpacing * gapsPerGroup * groupCount

    // Determine space required for gap
    const gapWidth = barWidth.gap * Math.max(0, groupCount - 1)

    // Calculate desired available width and then desired bar width 
    const availableWidth = width - (groupBarSpacingWidth + gapWidth)
    const autoBarWidth = Math.max(barWidth.min, Math.min(barWidth.max, availableWidth / barCount))

    return (isNaN(autoBarWidth) || autoBarWidth < 0)
      ? 0
      : autoBarWidth
  }

  return (
    <ChartSVG width={width} height={height} {...props}>
      {/* Render groups */}
      {items.map(({values, label, colors}, i) => <g key={label} transform={`translate(${getXPos(label, width)}, ${height})`}>
        {/* Render bars */}
        {values.map((value, j) => <Bar
          key={j}
          cx={splay(values.length, j) * (getBarWidth(width) + groupBarSpacing)}
          width={getBarWidth(width)}
          height={getYPos(value, height)}
          color={colors[j]}
          radius={barRadius} />)}
      </g>)}
    </ChartSVG>
  )
}

const Bar = ({ cx, width, height, color, radius=10 }) => {
  const effectiveRadius = Math.min(radius, width/2)
  return <rect
    x={cx-width/2}
    width={width}
    height={height+effectiveRadius}
    y={-height}
    fill={color}
    rx={effectiveRadius}
    ry={effectiveRadius} />
}

export default BarChart
