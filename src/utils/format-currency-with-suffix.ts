const THOUSAND = 1000

export function FormatCurrencyWithSuffix(value: number) {
  if (value < THOUSAND) {
    return value.toString()
  }
  const formattedNumber = (value / THOUSAND).toFixed(1)
  return `${formattedNumber}K`
}
