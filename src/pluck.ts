/**
 * Extracts the values of a given property from an array of objects.
 */
export function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map(item => item[key]);
}
