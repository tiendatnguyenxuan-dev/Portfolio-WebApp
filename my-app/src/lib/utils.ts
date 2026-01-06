import { clsx, type ClassValue } from "clsx"
import { format } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const formatDate = (date: Date | string | number) => {
    return format(new Date(date), 'EEE, dd MMM');
}

export const formatTime = (date: Date | string | number) => {
    return format(new Date(date), 'HH:mm:ss');
}