export function convertToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

export async function storeImage(src: string, file: File): Promise<void> {
  const base64 = await convertToBase64(file)
  localStorage.setItem(src, base64)
}

export async function updateImage(src: string, file: File): Promise<void> {
  const base64 = await convertToBase64(file)
  localStorage.setItem(src, base64)
}

export function deleteImage(src: string): void {
  localStorage.removeItem(src)
}

export function getImage(src: string): string | null {
  return localStorage.getItem(src)
}

export function downloadImage(src: string, filename: string): void {
  const base64 = getImage(src)
  if (!base64) return

  const link = document.createElement('a')
  link.href = base64
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
