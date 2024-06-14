export function formatToFloat(value: string) {
  const noThousandsSeparator = value.replace(/\./g, '')
  const floatString = noThousandsSeparator.replace(',', '.')

  return floatString
}
