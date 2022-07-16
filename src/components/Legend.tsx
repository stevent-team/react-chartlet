import { Fragment } from 'react'
import { CategoricalData, ChartColor } from '../charts/charts'
import { CATEGORICAL } from '../utils/colors'

interface LegendProps extends React.HTMLProps<HTMLDivElement> {
  categories: CategoricalData,
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
  height: 'max-content',
}

const Legend: React.FC<LegendProps> = ({
  categories,
  labelStyle={},
  percentageStyle={},
  bullets=true,
  percentages=false,
  colors=CATEGORICAL,
  bulletSize='15px',
  ...props }) => {
  // Must be at least one category
  if (!Object.keys(categories ?? {})?.length)
    throw new Error('Bad Data Exception: expected at least one category')

  // Determine formatting
  const sum = Object.values(categories).reduce((a, b) => a + b)
  const columns = 1 + Number(bullets) + Number(percentages)
  const style = { ...legendStyle, ...props?.style, gridTemplateColumns: 'auto '.repeat(columns) }

  return <div {...props} style={style}>
    {Object.entries(categories).map(([label, value], i) => <Fragment key={label}>
      {/* Bullet */}
      {bullets && <div style={{
        borderRadius: '50%',
        width: bulletSize,
        height: bulletSize,
        background: colors[i] }}/>}

      {/* Percentage */}
      {percentages && <div style={{ justifySelf: 'end', ...percentageStyle }}>{Math.floor(value/sum * 100)}%</div>}

      {/* Label */}
      <div style={labelStyle}>{label}</div>
    </Fragment>)}
  </div>
}

export default Legend
