# About
This project is a react app with a single page that displays a summary of covid cases in the world.

It displays a `summary of total cases`, `total deaths`, and `total recovered cases`.
It also contains a table which displays countries and their respective covid cases.

The app gets all the data from a [flask api](https://github.com/kamasuPaul/flask-Covid-19-api-demo) which also get data from an external  [Media Group API](https://github.com/M-Media-Group/Covid-19-API)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Local Setup
- Clone the repository
    - `cd` into the folder
    - create `.env` file
    - add baseUrl to the file
    ```
    REACT_APP_BASE_URL = 'http://localhost:5000' # <-- add this line
    ```
- Install dependencies
    - `npm install`
- Run the app
    - run `npm start`


### Features
- An app that displays a summary of covid cases in the world.
- Displays total cases, total deaths, and total recovered cases.
- Displays a table with countries and their respective covid cases.

### Table
- Displays a table with countries and their respective covid cases.



### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

