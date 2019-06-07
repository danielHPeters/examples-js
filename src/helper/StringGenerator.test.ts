import StringGenerator from './StringGenerator'

it('can generate random numbers from a range', () => {
  const start = Math.floor(Math.random() * 10)
  const end = Math.floor(Math.random() * 8)

  const result = StringGenerator.createRandomNumberWithinRange(start, end)

  expect(result).toBeGreaterThanOrEqual(start)
  expect(result).toBeLessThanOrEqual(end)
})
