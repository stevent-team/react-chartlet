import { CategoricalData, GroupedCategoricalData, DataSamples } from '../../src/types/charts'

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

export const generateSamples = (length = 3, max = 40): DataSamples => Array.from({ length: length }, () => [
  Math.floor(Math.random() * max),
  Math.floor(Math.random() * max),
])
