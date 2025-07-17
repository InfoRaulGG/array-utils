# 📦 ArrayUtils

A lightweight and reusable utility library for working with arrays in JavaScript and TypeScript. Includes commonly used functions such as sorting by property, removing duplicates, summing values, chunking arrays, and more.

---

## 🚀 Installation

```bash
npm install array-utils
```

If you're using a scoped package (e.g. `@yourname/array-utils`):

```bash
npm install @yourname/array-utils
```

---

## ✨ Features

- 🔁 Sort arrays of objects by a property
- 🧹 Remove duplicates (primitive or by object property)
- ➕ Sum and average values of numeric properties
- 📊 Group objects by a property
- 🔍 Extract properties (`pluck`)
- 📦 Chunk arrays into smaller parts
- 🔽 Find min/max objects by property
- 🧠 Fully typed for TypeScript
- ✅ Compatible with CommonJS and ESM

---

## 📚 Usage Examples

### JavaScript (CommonJS)

```js
const { sortBy, removeDuplicates, sumByProperty } = require('array-utils');

const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 30 },
];

console.log(sortBy(users, 'age', 'desc'));
console.log(removeDuplicates([1, 2, 2, 3])); // [1, 2, 3]
console.log(sumByProperty(users, 'age'));   // 85
```

### TypeScript (ESM)

```ts
import { groupBy, averageByProperty, pluck } from 'array-utils';

type User = { id: number; name: string; score: number };

const users: User[] = [
  { id: 1, name: 'Alice', score: 80 },
  { id: 2, name: 'Bob', score: 70 },
  { id: 3, name: 'Alice', score: 90 },
];

const grouped = groupBy(users, 'name');
const average = averageByProperty(users, 'score');
const names = pluck(users, 'name');
```

---

## 🧩 Available Functions

| Function               | Description                                      |
|------------------------|--------------------------------------------------|
| `sortBy`              | Sorts an array of objects by a property          |
| `removeDuplicates`    | Removes duplicate primitive values               |
| `removeDuplicatesBy`  | Removes duplicate objects by a specific key      |
| `sumByProperty`       | Sums all values of a numeric property            |
| `averageByProperty`   | Returns the average of a numeric property        |
| `groupBy`             | Groups objects by a specific property            |
| `pluck`               | Extracts values of a given property              |
| `chunk`               | Splits array into chunks of fixed size           |
| `minBy`               | Returns object with smallest value by key        |
| `maxBy`               | Returns object with largest value by key         |

---