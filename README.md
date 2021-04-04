# i-can-sort
The software iCanSort is a learning tool to help students study and visualise sorting algorithms and their correctness available on Windows and macOS. 

This project i-can-sort is built with React and Electron based on NodeJS with npm.

# Getting Started with iCanSort

You’ll need to have `Node@15.6.0` with `npm@6.14.10` but NO later version on your local development machine.

## Download & Install NodeJS and npm

You can follow the link below to download for Windows and Mac. 

For **Windows 64-bit**, you can download and install:

[https://nodejs.org/dist/v15.6.0/node-v15.6.0-x64.msi](https://nodejs.org/dist/v15.6.0/node-v15.6.0-x64.msi)

For **Mac**, you can download and install:

[https://nodejs.org/dist/v15.6.0/node-v15.6.0.pkg](https://nodejs.org/dist/v15.6.0/node-v15.6.0.pkg)

Or you can find downloads that fits your system here by yourself:

 [https://nodejs.org/dist/v15.6.0/](https://nodejs.org/dist/v15.6.0/)

Now you shall be able to execute `node -v` in your terminal and see `v15.6.0`


## Configuration Guide

In the project directory, you should run following command in your terminal in order to configure the dependencies.

### `npm install -g npm@6.14.10`

To install the specific npm version 6.14.10

### `npm -v`

Make sure that you see `6.14.10` in your terminal.\
To ensure that you install the specific npm version 6.14.10. 

### `npm install`

Installs all the develepment dependencies.

If this step took more than 10 minutes, you shall consider to connect to eduroam or open a VPN and set proxy for npm.\
`npm config set proxy http://server:port`\
`npm config set https-proxy http://server:port`

*Note that using a mirror may result in some error for some reason. Please use official registry.*


## Available Script

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Now you shall see iCanSort in your bowswer.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run electron-start`

Builds the app and launch electron to hava a development view of this app.

### `npm run dist-win`

Builds the app and create an installer for Windows to the `dist` folder.

### `npm run dist-mac`

Builds the app and create an installer for Mac to the `dist` folder.


### `npm run styleguide`

Launch a web view of the Style Guidist.\
This will build JavaScript Doc in each folder and display them in a webpage.
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
