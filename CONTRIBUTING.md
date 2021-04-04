# Contributing and Maintenance Guide to iCanSort

👍🎉 First off, thanks for taking the time to contribute or maintain! 🎉👍

The following is a set of guidelines for contributing to and maintaining iCanSort. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

[TOC]

## What do I need for environment requirements?

Hardware Requirement

  1. 2GB RAM minimum
  2. 300MB disk space minimum
  3. 1024 x 768 monitor resolution minimum
  4. Internet connection for visiting GitHub

Software Requirement

1. This software requires operating system (low configuration tested):
    - Windows: Windows 10 20H1 x64
    - macOS: macOS Mojave 10.14.6
2. The software needs a  64-bit Operating System
3. The software needs to call the device's default browser; Microsoft Edge (new), Google Chrome, Safari or Firefox are preferred.
4. You’ll need to have `Node@15.6.0` with `npm@6.14.10` but NO later version on your local development machine.

## What should I know and do before I get started?

The software iCanSort is a learning tool to help students study and visualise sorting algorithms and their correctness available on Windows and macOS. This project i-can-sort is built with React and Electron based on NodeJS with npm.


### Download & Install NodeJS and npm

You can follow the link below to download for Windows and Mac. 

For **Windows 64-bit**, you can download and install:

- [https://nodejs.org/dist/v15.6.0/node-v15.6.0-x64.msi](https://nodejs.org/dist/v15.6.0/node-v15.6.0-x64.msi)

For **Mac**, you can download and install:

- [https://nodejs.org/dist/v15.6.0/node-v15.6.0.pkg](https://nodejs.org/dist/v15.6.0/node-v15.6.0.pkg)

Or you can find downloads that fits your system here by yourself:

- [https://nodejs.org/dist/v15.6.0/](https://nodejs.org/dist/v15.6.0/)

Now you shall be able to execute `node -v` in your terminal and see `v15.6.0`


### Configuration Guide

In the project directory, you should run following command in your terminal in order to configure the dependencies.

#### `npm install -g npm@6.14.10`

To install the specific npm version 6.14.10

#### `npm -v`

Make sure that you see `6.14.10` in your terminal.
To ensure that you install the specific npm version 6.14.10. 

#### `npm install`

Installs all the develepment dependencies.

If this step took more than 10 minutes, you shall consider to connect to eduroam or open a VPN and set proxy for npm.\
`npm config set proxy http://server:port`
`npm config set https-proxy http://server:port`

*Note that using a mirror may result in some error for some reason. Please use official registry.*


### Available Scripts

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

Now you shall see iCanSort in your bowswer.

#### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run electron-start`

Builds the app and launch electron to hava a development view of this app.

#### `npm run dist-win`

Builds the app and create an installer for Windows to the `dist` folder.

#### `npm run dist-mac`

Builds the app and create an installer for Mac to the `dist` folder.


#### `npm run styleguide`

Launch a web view of the Style Guidist.\
This will build JavaScript Doc in each folder and display them in a webpage.

## Project Structure and Styleguides

iCanSort
├── src
│   ├── index.js
│   ├── components
│   └── scenes
│       ├── mainPages
│       └── subPages
└──

### Component Sructure Styleguide

Each component in components folder has five files. The component itself, its documentation, test, test log, test plan. Please follow the style as the example below.

InputBar
├── InputBar.jsx
├── InputBar.md
├── InputBar.test.jsx
├── TestLog_InputBar.md
└── TestPlan_InputBar.md

In InputBar.jsx, please write your name and purpose as follow.

```js
/*
    Author: Your Name

    Introduction and purpose
    External Library used
*/
```

### JavaScript Styleguide

All JavaScript code is linted with [Prettier](https://prettier.io).

### JavaScript Documentation Styleguide

- Download the file from the following website to check the documentation for iCanSort.

  https://github.com/team10nb/i-can-sort/blob/main/styleguide/index.html

- The styleguide configuration file can be found in: 

  https://github.com/team10nb/i-can-sort/blob/main/styleguidist.config.js

- Open the source code and find the related Markdown file to edit the documentation.

  Example:  edit in the "src/components/AlgorithmButton/AlgorithmButton.md" file.

  ##### **Developer**

  Yuting Jiang

  Reference: MATERIAL-UI (https://material-ui.com)

  #####  **Introduction**

  This component is used in Correctness-Tutoial-Example page to show an example algorithm.

  #####  **Import**

  ```html
  import { makeStyles } from "@material-ui/core/styles";
  import ButtonBase from "@material-ui/core/ButtonBase";
  import Typography from "@material-ui/core/Typography";
  ```

  #####  **Props**

  | Name         | Type   | Default | Description                       |
  | ------------ | ------ | ------- | --------------------------------- |
  | title        | string |         | Title of the algorithm button     |
  | code         | string |         | Code of the algorithm             |
  | paddingLeft  | number | 0       | The distance to its left element  |
  | paddingRight | number | 0       | The distance to its right element |
  | onClick      | fn     |         | Handle onClick event              |

  ##### Demo

  ```jsx
  const title_interminate =
      <h3>Example1<br />
      </h3>
  
  const code_interminate =
      <pre style={{ marginTop: -20 }}>
          {`
  factorial (int n){
    int result = 1;
    for (int i=1; ; i++){
      result = result * i;
    }
    return result;
  }
  `}
      </pre>;
  
  <AlgorithmButton 
    title={title_interminate} 
    code={code_interminate} 
    paddingLeft={0} 
    paddingRight={0} 
  />
  ```

- For more information about the styleguide, please visit the official website:

   [Styleguide (hugeinc.github.io)](https://hugeinc.github.io/styleguide/)




### Git Commit Styleguide

Use angular style.
`<type>(<scope>): <subject>`

`docs(README): fix grammar`

`fix(Main): fix function call`


## Summary of quality assurance

### Coding Convention

The team has made commit style:

`<type>(<scope>): <subject>`

`docs(README): fix grammar`

`fix(Main): fix function call`

Coding will be styled by Prettier.
### Independent quality assurance team

The team has two members who are mainly responsible for UI design, and they are also responsible for quality assurance.

The two members monitored coding process of the project, including structure, testing, documentation.

They also conducted Release Testing and Acceptance Testing by their own. They checked whether the system worked as the plan expected and remind technical team if there is anything wrong.

### Automated Unit Testing and Integration Testing

For each component and three main pages, unit tests and integration tests are written. The tests will be automatically conducted by script `npm test`.

### Release Testing and Acceptance Testing

Our quality assurance team conducted release testing after all the necessary features were done. Our stakeholders participated in the acceptance testing.

### Continuous Integration

A CI server on GitHub is utilised to conduct tests every time there is a push request. The team will receive email from GitHub if tests failed and will fix problems at once.

### Issue and Kanban

The team utilised Issue and kanban to track tasks and report bugs.



## User Manual

To see the user manual, check out the [User Manual](./User%20Manual.pdf).
