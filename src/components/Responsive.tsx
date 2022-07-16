import { useState } from 'react'
import useResize from '../hooks/useResize'

const Responsive = ({ children, ...props }) => {
  const [rect, setRect] = useState({ width: 0, height: 0 })

  const ref = useResize(el => setRect(el.getBoundingClientRect()))

  return <div ref={ref} {...props} style={{
    position: 'relative',
    ...props.style
  }}>
    {children(rect)}
  </div>
}

export default Responsive
