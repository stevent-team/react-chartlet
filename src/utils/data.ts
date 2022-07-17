import { CategoricalData, GroupedCategoricalData } from '../types/charts'

const invertListOfPairsOrRecord = <K extends string | number | symbol, V>(pairs: Record<K, V> | [K, V][]): [K[], V[]] => {
  return Array.isArray(pairs)
    ? pairs.reduce(([labels, values], [label, value]) => [[...labels, label], [...values, value]], [[], []])
    : [Object.keys(pairs), Object.values(pairs)]
} 

export const splitCategories = (categories: CategoricalData): [string[], number[]] => {
  const [labels, values] = invertListOfPairsOrRecord(categories)

  // Must be at least one category
  if (!labels?.length || !values?.length)
    throw new Error('Bad Data Exception: expected at least one category')
  
  return [labels, values]
}

export const splitGroups = (groups: GroupedCategoricalData): [string[], number[][]] => {
  const [labels, valueLists] = invertListOfPairsOrRecord(groups)
  
  // Must be at least one category
  if (!labels?.length || !valueLists?.length)
    throw new Error('Bad Data Exception: expected at least one group')
  
  return [labels, valueLists]
}

export const categoriesToGroups = (categories: CategoricalData): GroupedCategoricalData => {
  const [labels, values] = splitCategories(categories)
  return labels
    .map((label, i) => [label, [values[i]]] as [string, [number]])
}
