

# Intro 

<p align="center">
  <img src="./public/guppyLogo.png" width=500 height=500>
</p>

Guppy is an argument-based, random data generation agnostic testing library. The library is intended to be used in conjunction with source code written in a functional paradigm. 

# Table of Contents
- [Intro](#intro)
- [Table of Contents](#table-of-contents)
- [Benefits](#benefits)
- [Design](#design)
- [Usage](#usage)
- [Schema Structure](#schema-structure)
- [API](#api)
  - [test](#test)
    - [Arguments](#arguments)
    - [Example](#example)
  - [Chance Wrappers](#chance-wrappers)
  - [selectOne](#selectone)
    - [Arguments](#arguments-1)
    - [Example](#example-1)
  - [conditional](#conditional)
    - [Arguments](#arguments-2)
    - [Example](#example-2)
  - [generateValueBesides](#generatevaluebesides)
    - [Arguments](#arguments-3)
    - [Example](#example-3)
- [License](#license)

# Benefits
- Easy to maintain/update when requirements change
- No implicit knowledge as to how the unit-under-test should behave
- Increases range of variables to test with
- Increases boundary/failure testing
- Reduce duplication in example expectations

# Design

The end user will create schema for happy/failure/conditional paths. The schema will be used to generate random data. The random data will be passed to a callback, where it can be manipulated by the test writer into the expected state. This will serve as the expected to assert against the actual return from the unit-under-test.

# Usage

```js
import assert from 'assert';

import { integer } from '../src/chanceWrapper/chance';
import { test } from '../src/test';
import { selectOne } from '../src/utils/helperFunctions';

// function being tested
const happyBirthday =  (num: number) => {
    if (num < 1 || num > 120) {
        throw new Error('Not a valid birthday');
    }
   
    return num + 1;
};

// schema that produces non-failing results
const goodSchema = () => Math.floor(Math.random() * 120) + 1;

// schema that produces failing results
const badSchema = selectOne([
    integer({ max: 0 }),
    integer({ min: 121 }),
]);


it('Happy Birthday Passing',  () => {
    return test(goodSchema, (data) => {
        const expected = data + 1;
        const actual = happyBirthday(data);

        assert.equal(actual, expected);
    });
});

it('Happy Birthday failing',  () => {
    return test(badSchema, (data) => {
        assert.throws(() => happyBirthday(data));
    });
});
```

# Schema Structure

A schema can be something as simple as a single primitive or as complex as an Array of Objects. When parsing the schema, the parser will assume all functions generate a random value. Meaning you can leverage any random data generation library you desire, or the one's provided by Node/Browser, simply wrap it in a function.

Examples:

```js

// only generates a string of 'single value'
const schema = 'single value';


const carColor = ['red', 'white', 'black'];
const randomCarColor = () => carColor[Math.floor(Math.random() * 2)];
// generates an array of [randomNumber, hi, 'red' || 'white' || 'black']
const schema = [() => Math.random(), 'hi', randomCarColor];


// generates an object with random values for each key
const schema = {
    firstName: firstName();
    lastName: lastName();
    city: city();
};


// complex schema 
const schema = {
  data: {
    users: [
      {
        name: nameGenerator()
        address: addressGenerator(),
      },
      {
        name: nameGenerator()
        address: addressGenerator(),
      },
    ],
  },
};

```


# API

## test
**test(schema, func, options): void**

This function handles the lifecycle for generating the random values from the schema and then executing the body of a test.

### Arguments
generator: any - The schema to generate random values from

func: (generatedValue) => {} - A callback that receives the values generated from the schema

options: Object - Options object to configure the behavior of the test function

- iterations: number - The number of iterations to loop, defaults to 3
- fastFail: boolean - Whether or not to fail on first exception or accumulate, defaults to true
- selectUniqueValues: boolean - Attempt to select random values, defaults to true
- uniqueValueAttempts: number - Number of attempts to select unique values before reverting back to selecting random values, defaults to 5
- logger: Function - A custom logger to use when accumulating errors. An instance of each error is passed the logger, defaults to undefined
- customError: Function - The custom error to throw when finished aggregating errors. An array of the accumulated errors is passed to this function, defaults to undefined

### Example

```js
const schema = {
    name: () => randomName,
    city: () => randomCity,
};

test(schema, (data) => {
    // transform data

    // assertions
})

```


## Chance Wrappers

We provide wrappers for a majority of Chance.js functions. Chance.js is a random data generation library. The Chance.js documentation can be found [here](https://chancejs.com/).


## selectOne
**selectOne(generators): any**

Selects a single item within an array. The item can either be a primitive, object, array, or generator function. 

### Arguments

- generators: any[] - The array of items to select an item from


### Example

```js
// selects a number between 0-9 or 100 or 150
const schema = selectOne([
    () => Math.floor(Math.random() * 10),
    100,
    150,
])
```


## conditional
**conditional(expectation, condition)**

Conditionally executes an expectation given a condition

### Arguments

- expectation: assertion - The expectation to potentially execute 
- condition: boolean - If true executes expectation, else does not execute


### Example
```js
const schema = {
    name: () => randomName,
    city: () => randomCity,
};

test(schema, (data) => {
    // only executes assertion when data equals string hello    
    conditional(() => assert(expected, actual), data === 'hello')
})

```


## generateValueBesides
**generateValueBesides(generatorFunction, arrayOfValuesToAvoid): any**

### Arguments

- generatorFunction: () => () => randomValue - The function to execute to retrieve a random value
- arrayOfValuesToAvoid: any[] - The array of values to avoid

### Example
```js
// generate random number besides 1 or 2
const schema = generateValueBesides(
    () => Math.random(),
    [
        1,
        2,
    ],
)
```

# License
This project is licensed under the terms of the MIT license
