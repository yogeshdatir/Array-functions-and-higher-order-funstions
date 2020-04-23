[TOC]

# 1. Array.prototype.map()

The `map()` method <u>**creates a new array**</u> populated with the results of calling a provided function on every element in the calling array.

Returns a new array containing the results of calling `callbackFn` on every element in this array.

## <u>1.1 Syntax</u>

```javascript
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
```

## <u>1.2 When *not* to use map()</u>

Since [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) builds a new array, using it when you aren't using the returned array is an anti-pattern; use [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) or [`for-of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) instead.

You shouldn't be using `map` if:

1. you're not using the array it returns; and/or
2. you're not returning a value from the callback.

## <u>1.3 Examples</u>

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

​		Or, with an anonymous function:

```js
[1, 2, 3, 4].map(function(x){
    return x * 2
}) // [ 2, 4, 6, 8 ]
```

# 2. Array.prototype.filter()

The [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method **creates a new array** with all elements that pass the test implemented by the provided function.

Returns a new array containing all elements of the calling array for which the provided filtering `callbackFn` returns `true`.

## 1.1 <u>Syntax</u>

```js
let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
```

## 1.2 <u>Examples</u>

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

The following example returns all prime numbers in the array:

```js
let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(num) {
    if (num <= 1)
        return false;
    else if (num === 2)
        return true;
    else {
        for (let i = 2; i < num; i++)
            if (num % i === 0)
                return false;
        return true;
    }
}

console.log(array.filter(isPrime));   // [53, 2, 5, 7, 31, 97, 17]
```

# 3. Array.prototype.reduce()

The [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method executes a **reducer** function (that you provide) on each element of the array, resulting in a single output value.

Apply a `callbackFn` against an `accumulator` and each value of the array (from left-to-right) as to reduce it to a single value.

## 3.1 <u>Syntax</u>

```js
arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
```

## 3.2 <u>Examples</u>

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

# Example

Lets try with an example. Assume we have a list of grades from a classroom. Our classroom has 5 girls, 5 boys and each of them has a grade between 0 and 20.

```
var grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]
```

I want to know a few things about this:

- The average grade of this classroom
- The average grade of the boys
- The average grade of the girls
- The higher note among the boys
- The higher note among the girls

We will try to use higher-order functions to get a program that is simple and easy to read. Let's start by writing simple functions that can work together:

```js
let isBoy = student => student.sex === 'M'

let isGirl = student => student.sex === 'F'

let getBoys = grades => (
    grades.filter(isBoy)
)

let getGirls = grades => (
    grades.filter(isGirl)
)

let average = grades => (
    grades.reduce((acc, curr) => (
        acc + curr.grade
    ), 0) / grades.length
)

let maxGrade = grades => (
    Math.max(...grades.map(student => student.grade))
)

let minGrade = grades => (
    Math.min(...grades.map(student => student.grade))
)
```

I wrote 7 functions, and each of them has one job, and one job only.

*isBoy* and *isGirl* are responsible for checking if one student is a boy or a girl.

*getBoys* and *getGirls* are responsible for getting all the boys or girls from the classroom.

*maxGrade* and *minGrade* are responsible for getting the greatest and lowest grade in some data.

Finally, *average* is responsible to calculate the average grade of some data.

Notice that the *average* function doesn't know anything about the type of data it's suppose to process yet. That's the beauty of composition. We can re-use our code in different places. I can just plug this function with others.

Now, we have what we need to write higher-order functions:

```js
let classroomAverage = average(grades) // 10.2
let boysAverage = average(getBoys(grades)) // 7
let girlsAverage = average(getGirls(grades)) // 13.4
let highestGrade = maxGrade(grades) // 18
let lowestGrade = minGrade(grades) // 2
let highestBoysGrade = maxGrade(getBoys(grades)) // 16
let lowestBoysGrade = minGrade(getBoys(grades)) // 2
let highestGirlsGrade = maxGrade(getGirls(grades)) // 18
let lowestGirlsGrade = minGrade(getGirls(grades)) // 9
```

# Sources

[source]: https://dev.to/damcosset/higher-order-functions-in-javascript-4j8b	"Higher-order functions in JavaScript"

and MDN

