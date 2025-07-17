/**
 * Returns the object with the minimum value of the given property.
 */
export function minBy<T, K extends keyof T>(array: T[], key: K): T | undefined {
  if (!array.length) return undefined;

  return array.reduce((min, item) =>
    (item[key] as any) < (min[key] as any) ? item : min
  );
}
