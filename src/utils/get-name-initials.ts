export function getInitials(fullName: string): string {
  if (!fullName) return ''

  const nameParts = fullName.trim().split(' ')

  if (nameParts.length === 1) {
    return nameParts[0][0].toUpperCase()
  }

  const firstNameInitial = nameParts[0][0].toUpperCase()
  const lastNameInitial = nameParts[nameParts.length - 1][0].toUpperCase()

  return firstNameInitial + lastNameInitial
}
