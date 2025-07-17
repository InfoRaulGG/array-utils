/**
 * Sums the values of a specific numeric property in an array of objects.
 */
export function sumByProperty<T>(arr: T[], key: keyof T): number {
  return arr.reduce((sum, item) => {
    const value = item[key];
    return sum + (typeof value === 'number' ? value : 0);
  }, 0);
}
