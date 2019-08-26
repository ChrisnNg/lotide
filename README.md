# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install ChrisnNg/lotide`

**Require it:**

`const _ = require('ChrisnNg/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of an array
* `tail(array)`: returns the array without the head
* `middle(array)`: returns an array containing only the middle element(s) - two elements are return when the array is even.
* `eqArrays(arrayOne, arrayTwo)`: given two arrays, it will determine if the two arrays are identical to each other.
* `assertEqual(actual, expected)`: given a actual value and a expected value, it will compare the two and return an assertion message on if it is identical or not.
* `assertArraysEqual(arrayOne, arrayTwo)`: given a two arrays, it will compare the two and return an assertion message on if it is identical or not.
* `assertObjectsEqual(actual, expected)`: given a two objects, it will compare the two and return an assertion message on if it is identical or not.
* `countLetters(string)`: given a string, it will count the number of each unique letter - all strings are reduced to lowercase upon entry. An object with the count is returned.
* `countOnly(allItems, itemsToCount)`: given an array, it will count the given itemsToCount and return an object containing the count.
* `eqObjects(object1, object2)`:  returns true if as long as both objects contain the idential key with the identical value. keys can be in any position.
* `findKey(object, callback)`: scan the given object and return the first key for which the callback returns a truthy value. if no key is found, returns undefined.
* `findKeyByValue(object, value)`: scan the given object and return the first key which contains the given value. if no key is found, returns undefined.
* `flatten: flatten(arr)`: given an array with however many other arrays inside, it will flatten into a single-level array.
* `letterPositions(sentence)`: given a string, returns all the indices (zero-based positions) in the string where each character is found in the form of an object.
* `map(array, callback)`: given an array, the function will implement the given callback on each element within.
* `takeUntil(array, callback)`: keep collecting items from a provided array until the callback provided returns a truthy value.
* `without(source, itemsToRemove)`: given an array, and an itemsToRemove array, without returns a new array that no longer contains itemsToRemove.