export const scale = (number, min, max, lowest, highest) => (max-min)*(number-lowest)/(highest-lowest)+min

export const distance = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))

export const squaredDistance = (x1, y1, x2, y2) =>
  Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)

export const closest = (x, y, points) =>
  points.reduce((closest, p) =>
    closest ? (
      squaredDistance(x, y, closest.x, closest.y) < squaredDistance(x, y, p.x, p.y)
      ? closest : p
    ) : p,
  null)
