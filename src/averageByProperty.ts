import { sumByProperty } from "./sumByProperty";

/**
 * Calculates the average of a numeric property in an array of objects.
 */
export function averageByProperty<T>(arr: T[], key: keyof T): number {
  const total = sumByProperty(arr, key);
  return arr.length === 0 ? 0 : total / arr.length;
}
