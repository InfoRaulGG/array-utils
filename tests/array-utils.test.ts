import {
  sortBy,
  removeDuplicates,
  removeDuplicatesBy,
  sumByProperty,
  averageByProperty,
  groupBy,
  pluck,
  chunk,
  minBy,
  maxBy,
} from "../index";

describe("ArrayUtils", () => {
  const users = [
    { name: "Alice", age: 30, score: 80 },
    { name: "Bob", age: 25, score: 70 },
    { name: "Alice", age: 30, score: 90 },
  ];

  it("sortBy should sort by age descending", () => {
    const result = sortBy(users, "age", "desc");
    expect(result[0].age).toBe(30);
    expect(result[2].age).toBe(25);
  });

  it("removeDuplicates should remove primitive duplicates", () => {
    expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  it("removeDuplicatesBy should remove duplicates by name", () => {
    expect(removeDuplicatesBy(users, "name").length).toBe(2);
  });

  it("sumByProperty should sum ages", () => {
    expect(sumByProperty(users, "age")).toBe(85);
  });

  it("averageByProperty should average scores", () => {
    expect(averageByProperty(users, "score")).toBeCloseTo(80);
  });

  it("groupBy should group by name", () => {
    const grouped = groupBy(users, "name");
    expect(Object.keys(grouped)).toContain("Alice");
    expect(grouped["Alice"].length).toBe(2);
  });

  it("pluck should extract names", () => {
    expect(pluck(users, "name")).toEqual(["Alice", "Bob", "Alice"]);
  });

  it("chunk should split array into chunks", () => {
    const result = chunk([1, 2, 3, 4, 5], 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("minBy should return user with lowest score", () => {
    const result = minBy(users, "score");
    expect(result?.score).toBe(70);
  });

  it("maxBy should return user with highest score", () => {
    const result = maxBy(users, "score");
    expect(result?.score).toBe(90);
  });
});
