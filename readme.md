# JavaScript Assessment

This challenge is designed to assess the JavaScript skills you have gained so far.

### Learning Objectives Assessed

The following learning objectives will be assessed in this assessment:

- Create and assign values to variables.
- Use arithmetic operators to build simple mathematical equations.
- Represent logical assertions using `===`, `&&`, `||`, and `!`.
- Conditionally run code based on values and expressions.
- Create functions with parameters using the function declaration syntax.
- Return values from functions.
- Access elements in an array through bracket notation.
- Access values in an object through bracket and dot notation.
- Update values in an object with bracket and dot notation.
- Differentiate between arrays and objects.
- Write a loop with a variable number of iterations.
- Run JavaScript files with the `node` command.

### Assessment Setup

#### Getting started

1. Create a terminal in the root level of this repository, where `index.js` is, or navigate in an existing one to that directory. Then run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the assessment.

#### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will run the test output once.

#### Test Watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following instead of `npm test`:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.

#### Running The File To Manually Test Your Functions

You may use the following `exampleBikeNetworks` array to test your functions inside of this file. This is the same array of bike networks that is used in the tests.

To test your code manually, call the function you'd like to test, give it the `exampleBikeNetworks` array for input, and run this file with `node index.js` in your terminal. You will need to be in the directory where the `index.js` file is kept for the above command to work.

Finally, remember that in order for you to see output on the command line, you must log something out.

### Assessment Instructions

#### Existing Files

This repository contains the following files that you may need to edit or want to take a look at:

- `bike-networks.js`: This is the data that you can expect to be inserted into your function.
- `index.js`: This is where you will write your code. **This is the only file you should need to edit.** This file contains a variable, `exampleNetworks`, that contains all of the networks from the `bike-networks.js` file. You may use this variable if you'd like to run the `index.js` file from your command line.
- `__tests__/index.test.js`: All of the tests for the functions.
- `alternate-networks.js`: Another array of networks that the tests will make use of, in addition to those networks from the `bike-networks.js` file.

#### Function Descriptions

You will find examples and descriptions in both the `index.js` file and in the `__tests__/index.test.js` file.
