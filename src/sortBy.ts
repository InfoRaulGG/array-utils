/**
 * Sorts an array of objects by a given property, ascending or descending.
 */
export function sortBy<T>(arr: T[], prop: keyof T, order: 'asc' | 'desc' = 'asc'): T[] {
  return [...arr].sort((a, b) => {
    const valA = a[prop];
    const valB = b[prop];

    if (typeof valA === 'number' && typeof valB === 'number') {
      return order === 'asc' ? valA - valB : valB - valA;
    }

    return order === 'asc'
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });
}