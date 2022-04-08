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

const Legend = ({ data, labels, colors=CATEGORICAL, bulletSize='15px', ...props }) => {
  
  const sum = data.reduce((a, b) => a + b)
  return <div {...props} style={{...legendStyle, ...props?.style }}>
    {data.map((x, i) => <>
      <div style={{
        borderRadius: '50%',
        width: bulletSize,
        height: bulletSize,
        background: colors[i] }}/>
      <div style={{ justifySelf: 'end' }}>{Math.floor(x/sum * 100)}%</div>
      <div>{labels[i]}</div>
    </>)}
  </div>
}

export default Legend
