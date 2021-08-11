# Venue URI Generator

## Description

The Venue Generator will take an inputted town and venue and slugify the arguments into a usable URI.

## Table of Contents

- [Venue URI Generator](#venue-uri-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tech/framework used](#techframework-used)
  - [Scripts](#scripts)
  - [Tests](#tests)
  - [GitHub Actions](#github-actions)
  - [Contact](#contact)

## Installation

```
npm install
```

## Usage

Invoke the exported 'generateUri' function in any file with your town and venue arguments to return the generated URI.

You can also run the `npm run check` script with the town and venue as arguments to see your URI console logged:

`npm run check Birmingham O2Academy`

## Tech/framework used

<b>Built with</b>

- [Node.js](https://nodejs.org/en/)
- [jest](https://jestjs.io/)
- [slugify](https://www.npmjs.com/package/slugify)
- [axios](https://axios-http.com/docs/intro)

## Scripts

You can use the below scripts to run the app without or with nodemon:

```
npm run start
npm run check Town Venue
npm run test
```

## Tests

Tests are located in the `__tests__` directory and can be ran using the below script:

`npm run test`

## GitHub Actions

I have used GitHub actions to run the created tests when a Pull Request is created. This is to help check for any issues before merging with the main branch.

An action to send a POST request has also been setup when pushing directly to the main branch.

## Contact

For any issues, please contact [my email](mailto:leonwheeler08@gmail.com) 😀
