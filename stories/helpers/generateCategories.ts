export const generateCategories = (length = 3) => Object.fromEntries(
    Array
      .from({length}, () => Math.floor(Math.random() * 40))
      .map((v, i) => [String(i), v])
  )
