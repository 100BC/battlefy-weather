import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toUpper(word: string) {
  return word
    .split(' ')
    .map((sub) => sub[0].toUpperCase() + sub.slice(1))
    .join(' ');
}

export function getTimeOfCalc(ms: number) {
  return dayjs(ms).format('h:mm A');
}
