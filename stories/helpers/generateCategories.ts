const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ'.split('')

export const generateCategories = (length = 3) => Object.fromEntries(
    Array
      .from({length}, () => Math.floor(Math.random() * 40))
      .map((v, i) => [LETTERS[i % LETTERS.length], v])
  )
