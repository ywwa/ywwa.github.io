import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** cn( "", variable, { ... } ) */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
