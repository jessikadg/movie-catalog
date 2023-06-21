# Ubi Ops Assessment

<img width="1440" alt="Screenshot 2023-06-21 at 10 25 02" src="https://github.com/jessikadg/ubiops-assessment/assets/48770521/6cabdec2-761c-4f4d-9bf4-c6b848c78d22">

As part of this assessment, a Show Catalog interface was created using TvMaze. 

Technical choices for it were React, Javascript (not Typescript to save some time from defining types optimally), and Styled Components (for a nice support of animations and clean resuable components).

Loading Spin Components and Error handlings were left out for the sake of time as well in some parts of the code, with a comment indicating where they would come in. 

Animations were added to give the user a feeling of speed and interactivity. Some of the animations were particularly clean to write and incorporate with the code due to props by styled components. The decision to add animations came from the assignment mentioning that a friendly UX was part of the criteria.

The api is called from a separate folder and separate files. In an ideal scenario, the URL would be extracted to a .env file and read from each of the API calls.

Mobile Responsiveness was added through some components, but not the search bar (time constraints). The set up with the sizes of screens for styling was already in place.

Hope you enjoy it! :)

## To run this project locally:

Clone this repo
Run `yarn`
Run `yarn start`


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
