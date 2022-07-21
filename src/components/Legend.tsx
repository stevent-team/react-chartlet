import { Fragment } from 'react'
import { CategoricalData, ChartColor, GroupedCategoricalData } from '../types/charts'
import { CATEGORICAL } from '../utils/colors'
import { categoriesToGroups, invertListOfPairsOrRecord } from '../utils/data'

interface LegendProps extends React.HTMLProps<HTMLDivElement> {
  categories?: CategoricalData,
  groups?: GroupedCategoricalData,
  groupLabels?: string[],
  labelStyle?: React.CSSProperties,
  percentageStyle?: React.CSSProperties,
  bullets?: boolean,
  percentages?: boolean,
  colors?: ChartColor[],
  bulletSize?: string,
}

const legendStyle = {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontFamily: 'sans-serif',
  gridTemplateColumns: 'auto auto auto',
  rowGap: '.5em',
  columnGap: '.5em',
  padding: '.5em',
  alignSelf: 'center',
  justifySelf: 'center',
  height: 'max-content',
}

const Legend: React.FC<LegendProps> = ({
  categories,
  groups,
  groupLabels,
  labelStyle={},
  percentageStyle={},
  bullets=true,
  percentages=false,
  colors=CATEGORICAL,
  bulletSize='15px',
  ...props
}) => {
  // Must be at least one category
  const dataSources = Number(!!categories) + Number(!!groups)
  if (dataSources !== 1)
    throw new Error(`Bad Data Exception: expected exactly 1 data source. Received ${dataSources}`)
  
  // Resolve labels and values
  let items = []
  if (categories) {
    const [labels, values] = invertListOfPairsOrRecord(categories)
    const sum = values.reduce((a, b) => a + b, 0)
    items = labels.map((_, i) => ({
      label: labels[i],
      percentage: Math.floor(values[i]/sum * 100),
      color: colors[i % colors.length]
    }))
  }

  if (groups) {
    const [_labels, valueLists] = invertListOfPairsOrRecord(groups)
    const values = Array.from({ length: valueLists[0].length }, (_, i) => valueLists.map(values => values[i]).reduce((a, b) => a + b)) // valueLists.map(values => values.reduce((a, b) => a + b, 0))
    const sum = values.reduce((a, b) => a + b)
    items = values.map((_, i) => ({
      label: groupLabels ? groupLabels[i] : `${i+1}`,
      percentage: Math.floor(values[i]/sum * 100),
      color: colors[i % colors.length],
    }))
  }

  // Determine formatting
  const columns = 1 + Number(bullets) + Number(percentages)
  const style = { ...legendStyle, ...props?.style, gridTemplateColumns: 'auto '.repeat(columns) }

  return <div {...props} style={style}>
    {items.map(({ label, percentage, color }, i) => <Fragment key={label}>
      {/* Bullet */}
      {bullets && <div style={{
        borderRadius: '50%',
        width: bulletSize,
        height: bulletSize,
        background: color }}/>}

      {/* Percentage */}
      {percentages && <div style={{ justifySelf: 'end', ...percentageStyle }}>{percentage}%</div>}

      {/* Label */}
      <div style={labelStyle}>{label}</div>
    </Fragment>)}
  </div>
}

export default Legend
