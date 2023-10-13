import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sleep(delay = 500) {
  console.log('this fires?', delay)
  return new Promise((res) => setTimeout(res, delay))
}
