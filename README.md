# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jayrmesa/lotide`

**Require it:**

`const _ = require('@jayrmesa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual` : Checks if two of the arrays are equal with return assertion statement.
* `assertEqual` : Checks if two of the data are equal, then return an assertion statement.
* `assertObjectsEqual` : Checks if two objects are equal with return assertion statement.
* `countLetters`: Checks the count of the letters in the string, then returns the object of letter counted.
* `countOnly` : Checks the given object with a list of string, then returns the number of occurrences for each.
* `eqArrays` : Checks if two of the arrays are equal with boolean.
* `eqObjects` : Checks if two of the objects are equal with boolean.
* `findKey` : Checks the object and callback, then returns the key associated with it.
* `findKeyByValue` : Check object and the value, then returns the key associated with it.
* `flatten`: Checks a nested array, then returns a flat array with the same elements. 
* `head` : Checks the array, then returns the first element.
* `letterPositions` : Checks the strings, then returns an object with an array of positions for each.
* `map` : Checks the array and a callback function, then return an array with the callback applied.
* `middle` : Checks for the middle element of the array
* `tail` : Checks for the last element of the array
* `takeUntil` : Checks the array and a callback function, then return all elements until true.
* `without`: Checks the array with the exclusion list, then returns the array that is not excluded. 

## Test
This project is tested and design for _M & C_ ,  `Mocha and Chai` unit testing