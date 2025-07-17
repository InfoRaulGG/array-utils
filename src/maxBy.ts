/**
 * Returns the object with the maximum value of the given property.
 */
export function maxBy<T, K extends keyof T>(array: T[], key: K): T | undefined {
  if (!array.length) return undefined;

  return array.reduce((max, item) =>
    (item[key] as any) > (max[key] as any) ? item : max
  );
}
