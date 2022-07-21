import { useContext } from "react"
import { ChartletContext } from "./Chartlet"

const ChartSVG: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
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

export default ChartSVG
