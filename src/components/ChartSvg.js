import { useCallback } from 'react'
import { closest } from '../utils'

const ChartSvg = ({
  width,
  height,
  tooltip,
  ...props
}) => {
  const handleTooltip = useCallback((mouseX, mouseY) => {
    if (!tooltip?.points) return

    tooltip?.fn?.handle?.({
      mouseX, mouseY,
      ...closest(mouseX, mouseY, tooltip.points)
    })
  }, [tooltip])

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      onMouseMove={e => {
        const { top, left } = e.target.getBoundingClientRect()
        handleTooltip(e.clientX - left, e.clientY - top)
      }}
      onTouchMove={e => {
        const { top, left } = e.target.getBoundingClientRect()
        handleTooltip(e.touches[0].clientX - left, e.touches[0].clientY - top)
      }}
      onTouchEnd={e => {
        tooltip?.fn?.close?.(e)
        e.preventDefault()
      }}
      onMouseLeave={tooltip?.fn?.close}
      {...props}
      style={{
        display: 'block',
        boxSizing: 'border-box',
        position: 'absolute',
        inset: 0,
        ...props.style
      }}
    />
  )
}

export default ChartSvg
