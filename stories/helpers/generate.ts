import { CategoricalData, GroupedCategoricalData, SeriesData } from '../../src/types/charts'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ'.split('')

export const generateCategories = (length = 3): CategoricalData => Object.fromEntries(
    Array
      .from({length}, () => Math.floor(Math.random() * 40))
      .map((v, i) => [LETTERS[i % LETTERS.length], v])
  )

export const generateGroups = (length = 3, values = 2): GroupedCategoricalData => Object.fromEntries(
  Array
    .from({ length }, () => Array.from({ length: values }, () => Math.floor(Math.random() * 40)))
    .map((values, i) => [LETTERS[i % LETTERS.length], values])
)

export const generateSeries = (series=2, length =3, max = 40): SeriesData => 
  Array.from({ length: series }, () =>
    Array.from({ length: length }, (_, i) => [
      i,
      Math.floor(Math.random() * max),
    ])
  )
