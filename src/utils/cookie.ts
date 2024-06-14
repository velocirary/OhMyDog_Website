import { signInResponse } from '@/api/post-sign-in'

interface setCookieProps {
  name: string
  value: signInResponse
  days?: number
}

interface getCookieProps {
  name: string
}

interface deleteCookieProps {
  name: string
}

export function setCookie({ name, value, days = 7 }: setCookieProps) {
  const expirationDate = new Date()
  expirationDate.setDate(expirationDate.getDate() + days)

  // Converte o objeto signInResponse para uma string JSON
  const formattedValue = encodeURIComponent(JSON.stringify(value))

  document.cookie = `${name}=${formattedValue};expires=${expirationDate.toUTCString()};path=/`
}

export function getCookie({ name }: getCookieProps) {
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookiePairs = decodedCookie
    .split('; ')
    .map((cookie) => cookie.split('='))
  const cookie = cookiePairs.find(([cookieName]) => cookieName === name)
  if (cookie) {
    const decodedValue = decodeURIComponent(cookie[1])
    return JSON.parse(decodedValue) as signInResponse
  }
  return undefined
}

export function deleteCookie({ name }: deleteCookieProps) {
  const expirationDate = new Date()
  expirationDate.setTime(expirationDate.getTime() - 1) // Define a data de expiração para o passado

  document.cookie = `${name}=;expires=${expirationDate.toUTCString()};path=/`
}
