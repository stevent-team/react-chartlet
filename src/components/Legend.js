import { CATEGORICAL } from '../utils/colors'

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

const Legend = ({
  data,
  labels,
  colors=CATEGORICAL,
  bulletSize='15px',
  labelStyle,
  percentageStyle,
  ...props }) => {
  
  const sum = data.reduce((a, b) => a + b)
  return <div {...props} style={{...legendStyle, ...props?.style }}>
    {data.map((x, i) => <>
      {/* Bullet */}
      <div style={{
        borderRadius: '50%',
        width: bulletSize,
        height: bulletSize,
        background: colors[i] }}/>

      {/* Percentage */}
      <div style={{ justifySelf: 'end', ...percentageStyle }}>{Math.floor(x/sum * 100)}%</div>
      
      {/* Label */}
      <div style={labelStyle}>{labels[i]}</div>
    </>)}
  </div>
}

export default Legend
