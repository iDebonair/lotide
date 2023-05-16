# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @idebonair/lotide`

**Require it:**

`const _ = require('@idebonair/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `const (assertArraysEqual)`: This function accept series of arrays and compare each element to another array to confirm if the keys and values in the two arrays are both similar
* `const (assertEqual)`: Accepts two strings and compares strictly if they are both equal
* `const (assertObjectsEqual)`: assertObjectsEqual will take in two objects and console.log an appropriate message to the console confirming if the assertion passes or fails.
* `const (head)`: function to retrieve the first element from the array
* `const (tail)`: function to retrieve every element except the head (first element) of the array
* `const (middle)`: returns with only the middle element(s) of the provided array
* `const (flatten)`: This function given an array with other arrays inside, it can flatten it into a single-level array.
* `const (countOnly)`: This function takes in a collection of items and return counts for a specific subset of those items.
* `const (eqArrays)`:
* `const (eqObjects)`: This function compares two objects together and prints out if the objects are thesame or not
* `const (findKey)`:This takes in an object and a callback, scans the object and return the first key for which the callback returns a truthy value.
* `const (findKeyByValue)`: This takes in an object and a value, scans the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined
* `const (letterPositions)`: This returns all the indices (zero-based positions) in the string where each character is found.
* `const (map)`: This function iterates through the elements of a given array and check if it is strictly equal. It passes the result of the comparison
* `const (takeUntil)`: The function will return a "slice of the array with elements taken from the beginning." 