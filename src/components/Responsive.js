import { useState } from 'react'
import useResize from '../hooks/useResize'

const Responsive = ({ children, ...props }) => {
  const [rect, setRect] = useState({})

  const ref = useResize(el => setRect(el.getBoundingClientRect()))

  return <div ref={ref} {...props}>{children(rect)}</div>
}

export default Responsive
