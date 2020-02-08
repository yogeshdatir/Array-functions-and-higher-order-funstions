let array = ['red', 'orange', 'pink', 'white', 'black', 'yellow']
var root_div = document.querySelector('#root')

// Array Properties:
// 1. Array.length

root_div.innerHTML = '<p>' + 'Array.length: array.length = ' + array.length + '</p>'

// Access the elements:

root_div.innerHTML += '<p>' + 'Access the elements: array[3] = ' + array[3] + '</p>'

// Iterate the array:

//array.forEach( (element, index, arr) => console.log(element, index))

// Array Functions:
// 1. arr.push(...items) – adds items to the end,
let newLength = array.push('Orange')                                     // returns new length of modified array
console.log(newLength, array)

// 2. arr.pop() – extracts an item from the end,
let removedLastElement = array.pop()                                     // return removed last element
console.log(removedLastElement, array)

// 3. arr.shift() – extracts an item from the beginning,
let removedFirstElement = array.shift()                                  // return removed first element
console.log(removedFirstElement, array)

// 4. arr.unshift(...items) – adds items to the beginning.
let newLength1 = array.unshift('red')                                   // returns new length of modified array
console.log(newLength1, array)

// 5. splice(pos, deleteCount, ...items) – at index pos delete deleteCount elements and insert items.
// syntax: arr.splice(index[, deleteCount, elem1, ..., elemN])
let removedElement = array.splice(2, 1)                                 // returns removed element
let removedElements = array.splice(2, 2)                                // returns array of removed elements

// 6. slice(start, end) – creates a new array, copies elements from position start till end (not inclusive) into it.
// syntax: arr.slice([start], [end])
let newArray = array.slice(1, 3)                                        // return new array
let newArray1 = array.slice(-2)

// Array Methods: 

// 1. Array.from(): from an array-like or iterable object

//console.log(Array.from('foo'))

// syntax: Array.from(arrayLike [, mapFn [, thisArg]])

//console.log(Array.from([1, 2, 3], x => x + x))
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
//console.log(Array.from({length: 5}, (v, i) => i))
// [0, 1, 2, 3, 4]