# Maintenance Guide to iCanSort

👍🎉 First off, thanks for taking the time to maintain! 🎉👍

The following is a set of guidelines for maintaining iCanSort. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

- [Maintenance Guide to iCanSort](#maintenance-guide-to-icansort)
  - [Wait! I just want to try your software!](#wait-i-just-want-to-try-your-software)
  - [What do I need for environment requirements?](#what-do-i-need-for-environment-requirements)
    - [Hardware Requirement](#hardware-requirement)
    - [Software Requirement](#software-requirement)
  - [What should I know and do before I get started?](#what-should-i-know-and-do-before-i-get-started)
    - [Download & Install NodeJS and npm](#download--install-nodejs-and-npm)
    - [Clone or Download i-can-sort](#clone-or-download-i-can-sort)
    - [Configuration Guide](#configuration-guide)
      - [`cd PATH-TO-ROOT-OF-ICANSORT`](#cd-path-to-root-of-icansort)
      - [`npm install -g npm@6.14.9`](#npm-install--g-npm6149)
      - [`npm -v`](#npm--v)
      - [`npm install`](#npm-install)
    - [Available Scripts](#available-scripts)
      - [`npm start`](#npm-start)
      - [`npm test`](#npm-test)
      - [`npm run build`](#npm-run-build)
      - [`npm run electron-start`](#npm-run-electron-start)
      - [`npm run dist-win`](#npm-run-dist-win)
      - [`npm run dist-mac`](#npm-run-dist-mac)
      - [`npm run styleguide`](#npm-run-styleguide)
  - [Project Structure and Styleguide](#project-structure-and-styleguide)
    - [Component Structure Styleguide](#component-structure-styleguide)
    - [JavaScript Styleguide](#javascript-styleguide)
    - [JavaScript Documentation Styleguide](#javascript-documentation-styleguide)
    - [Git Commit Styleguide](#git-commit-styleguide)
  - [Summary of Quality Assurance](#summary-of-quality-assurance)
    - [Coding Convention](#coding-convention)
    - [Independent Quality Assurance Team](#independent-quality-assurance-team)
    - [Peer Programming](#peer-programming)
    - [Detailed JavaScriptDoc Documentation](#detailed-javascriptdoc-documentation)
    - [Automated Unit Testing and Integration Testing](#automated-unit-testing-and-integration-testing)
    - [Release Testing and Acceptance Testing](#release-testing-and-acceptance-testing)
    - [Continuous Integration](#continuous-integration)
    - [Issues and Kanban](#issues-and-kanban)
  - [User Manual](#user-manual)

## Wait! I just want to try your software!

You can download the software directly [here](https://github.com/team10nb/i-can-sort/releases).

We also provide you a User Manual [here](https://github.com/team10nb/i-can-sort/blob/main/User%20Manual.pdf).

## What do I need for environment requirements?

### Hardware Requirement

1. 2GB RAM minimum
2. 300MB disk space minimum
3. 1024 x 768 monitor resolution minimum
4. Internet connection for visiting GitHub

### Software Requirement

1. This software requires operating system (low configuration tested):
    - Windows: Windows 10 20H1 x64
    - macOS: macOS Mojave 10.14.6
2. The software needs a  64-bit Operating System
3. The software needs to call the device's default browser; Microsoft Edge (new), Google Chrome, Safari or Firefox are preferred.
4. You’ll need to have `Node@14.15.3` with `npm@6.14.9` but NO later version on your local development machine.

## What should I know and do before I get started?

The software iCanSort is a learning tool to help students study and visualise sorting algorithms and their correctness available on Windows and macOS. This project i-can-sort is built with React and Electron based on NodeJS with npm.


### Download & Install NodeJS and npm

You can follow the link below to download for Windows and Mac. Note that npm will be downloaded and installed together with Node, so here we only provide you the link to download Node.

For **Windows 64-bit**, you can download and install:

- [https://nodejs.org/dist/v14.15.3/node-v14.15.3-x64.msi](https://nodejs.org/dist/v14.15.3/node-v14.15.3-x64.msi)

For **Mac**, you can download and install:

- [https://nodejs.org/dist/v14.15.3/node-v14.15.3.pkg](https://nodejs.org/dist/v14.15.3/node-v14.15.3.pkg)

Or you can find downloads that fits your system here by yourself:

- [https://nodejs.org/dist/v14.15.3/](https://nodejs.org/dist/v14.15.3/)

Now you shall be able to execute `node -v` in your terminal and see `v14.15.3`

### Clone or Download i-can-sort

For clone the project, you can use both HTTPS or SSH. Please make sure you have configured SSH in your machine and GitHub if you want to use SSH.

- Clone via HTTPS: `git clone https://github.com/team10nb/i-can-sort.git`
- Clone via SSH: `git clone git@github.com:team10nb/i-can-sort.git`
- Download ZIP: [Click_To_Download](https://github.com/team10nb/i-can-sort/archive/refs/heads/main.zip)

### Configuration Guide

In the project directory, you should run following command in your **terminal** in order to configure the dependencies.

#### `cd PATH-TO-ROOT-OF-ICANSORT`

Goes to the directory which is the root of this project folder you downloaded
#### `npm install -g npm@6.14.9`

To install the specific npm version 6.14.9

#### `npm -v`

Make sure that you see `6.14.9` in your terminal.
To ensure that you install the specific npm version 6.14.9.

#### `npm install`

Installs all the development dependencies.

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

Now you shall see iCanSort in your browser.

*Note that using broswer view the app does not utilise electron features, 'view Group's website' and 'export note' functions cannot work. The performance is somehow reduced either due to the browser.*

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

## Project Structure and Styleguide

iCanSort\
├── src\
│   ├── index.js\
│   ├── components\
│   └── scenes\
│       ├── mainPages\
│       └── subPages\
└──

### Component Structure Styleguide

Each component in components folder has five files. The component itself, its documentation, test, test log, test plan. Please follow the style as the example below.

InputBar\
├── InputBar.jsx\
├── InputBar.md\
├── InputBar.test.jsx\
├── TestLog_InputBar.md\
└── TestPlan_InputBar.md

In source code like *InputBar.jsx*, please write your name and purpose as follow.

```js
/*
    Author: Your Name

    Introduction and purpose
    External Library used
*/
```

In documentation like *InputBar.md*, please follow the guide in [JavaScript Documentation Styleguide](#javascript-documentation-styleguide).

In test file like *InputBar.test.jsx*, please write your name as follow.

```js
/*
    Author: Your Name
*/
```

In *TestLog* and *TestPlan*， please follow the sample in `src/TestLog` and `src/TestPlan`

### JavaScript Styleguide

All JavaScript code is linted with [Prettier](https://prettier.io).

### JavaScript Documentation Styleguide

- Download the folder from the following website to check the documentation for iCanSort.

  `https://github.com/team10nb/i-can-sort/blob/main/styleguide/`

- Or click link below to see the web documentation if you are the marker of GRP who downloaded documentation we uploaded through moodle/MS Form
  
  [JavaScriptDoc](./styleguide/index.html)

- The styleguide configuration file can be found in:

  `https://github.com/team10nb/i-can-sort/blob/main/styleguidist.config.js`

- Open the source code and find the related Markdown file to edit the documentation.

  Example:  edit the documentation of the component AlgorithmButton in the `src/components/AlgorithmButton/AlgorithmButton.md` file.

- For more information about the styleguide, please visit the official website of [Styleguide (hugeinc.github.io)](https://hugeinc.github.io/styleguide/)

### Git Commit Styleguide

Use angular style.
`<type>(<scope>): <subject>`

`docs(README): fix grammar`

`fix(Main): fix function call`


## Summary of Quality Assurance

### Coding Convention

The styleguide in the previous chapter includes our coding convention. We follow the guide we defined, which makes the structure clear and code clean.
### Independent Quality Assurance Team

The team has two members who are mainly responsible for UI design, and they are also responsible for quality assurance.

The two members monitored coding process of the project, including structure, testing, documentation.

They also conducted Release Testing and Acceptance Testing by their own. They checked whether the system worked as the plan expected and remind technical team if there is anything wrong.

### Peer Programming

The team did peer programming for each piece of code. Each component we built was coded by two people. One would be monitoring while the other was coding. That is an effective method to advoid problems, such as wrong naming, missing semicolon, and no comments.

### Detailed JavaScriptDoc Documentation

The team utilised StyleGuidist for documentation. Each component and main scenes are documented carefully for maintenance purpose.

If you have downloaded the whole project, you can view the web through [JavaScriptDoc](./styleguide/index.html).

The whole folder is in `https://github.com/team10nb/i-can-sort/blob/main/styleguide/`

### Automated Unit Testing and Integration Testing

For each component and three main pages, unit tests and integration tests are written. The tests will be automatically conducted by script `npm test`.

### Release Testing and Acceptance Testing

Our quality assurance team conducted release testing after all the necessary features were done. Our stakeholders participated in the acceptance testing.

### Continuous Integration

A CI server on GitHub is utilised to conduct tests every time there is a push request. The team will receive email from GitHub if tests failed and will fix problems at once.

View CI server by: [https://github.com/team10nb/i-can-sort/actions](https://github.com/team10nb/i-can-sort/actions)

### Issues and Kanban

The team utilised Issues and kanban to track tasks and report bugs.

Issues are available in [https://github.com/team10nb/i-can-sort/actions](https://github.com/team10nb/i-can-sort/actions)

Kanban is available in [https://github.com/team10nb/i-can-sort/projects/1](https://github.com/team10nb/i-can-sort/projects/1)


## User Manual

To see the user manual, check out the [User Manual](./User%20Manual.pdf).
