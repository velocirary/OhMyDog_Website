export function calculatePercentage(total: number, achieved: number) {
  const percentage = (achieved / total) * 100

  return Math.floor(percentage)
}
