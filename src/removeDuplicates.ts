/**
 * Removes duplicate primitive values from an array.
 */
export function removeDuplicates<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
