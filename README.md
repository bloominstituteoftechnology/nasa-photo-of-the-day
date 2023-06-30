# NASA APOD

## Side Effects Module Project

This will be a two-module project. In it you will consume the NASA API to fetch the "Astronomy Photo Of The Day" or APOD. Once you fetch the data, you will build a few components that will render different pieces of data in your interface.

After the second module (in the [README_DAY_TWO](./README_DAY_TWO.md) file) you will re-style your app using Styled Components.

## Introduction

In this project you will build out a application to show the NASA photo of the day.

- This is a really fun project, and one to show your family and friends when you've finished.
- You will be starting from scratch and building the entire app.
- You don't have any design specs to follow for this project, so you may want to start by building a basic wire-frame first.
- Make it simple at the beginning, since you don't know what data you'll be getting back from NASA.
- Once you get the data back, there may be more than you expected, or less than you expected, so your design plans may change. That's totally fine, and very normal in the real world. Just make the proper adjustments and move forward!

## Instructions

### Task 1: Setup

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] Download project dependencies by running `npm install`
- [ ] Start up the app using `npm run dev`
- [ ] Implement the project on the `main` branch, committing changes regularly.
- [ ] Push commits: `git push origin main`.

### Task 2: Planning

- [ ] If you want, this is the time to make a simple design spec (look up ["simple wireframes"](https://www.google.com/search?q=simple+wireframes) to find resources & examples). **A pen & paper sketch (or outline) is often the fastest way to start your planning.**
- [ ] Once you have a design plan in mind, break down the designs into individual components.
- [ ] Plan which components will hold state, what data each needs from props (if any), and where you will be making your data fetch.
- [ ] Now it's time to jump into the code!

## Task 3: File structure

- [ ] Take a look at your planned components. Create the folders and files you need for each component.
- [ ] Leave most of them blank for now - you need to get your data from the API before you can really get these built.

## Task 4: Fetching the data

- [ ] Inside `frontend/components/App.js` add state for the data you'll be getting from NASA.
- [ ] Add an effect hook to handle the API call side effect after first render of App.
- [ ] Go to the [NASA APOD API docs](https://api.nasa.gov/#apod) and learn how to make the API call.
- [ ] Using the endpoint given in the docs, fetch the data using `axios`, which is already installed in the project.
- [ ] In your `.then()` make sure to `console.log` the response so you can look at the shape of the data. 😃
- [ ] Before you add your data to state, make sure your effect hook has a dependencies array, otherwise you will start an **infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to request a real API key.**

**Notes on the NASA API**

1. If the photo url is NOT a photo, you will need to learn how to display a video in a React app on your own, OR just fetch the APOD from a different date.

2. You don't need an API key other than the DEMO_KEY unless you go over the API request limits:
    - Hourly Limit: 30 requests per IP address per hour
    - Daily Limit: 50 requests per IP address per day

3. If you end up needing to request an API key, **do not push it to GitHub** along with your code. This is a security risk!

4. As an "emergency" alternative to the NASA API, you can make GET requests to `http://localhost:9009/api/apod?api_key=DEMO_KEY`.

## Task 5: Consuming the data

- [ ] Once you have made the call correctly, and logged the data, add the data to the state property you built.
- [ ] Build out your other components. Compose your UI, and then pass the data to your children components via props so you can render it on the DOM.

**Pro Tips**

1. You may run into an error where your components try to access object properties before your data is finished being fetched - ie. `Cannot read property 'url' of undefined`. This means that the data you passed as props is undefined, when you were expecting it to be an object. You can fix this by simply adding something like this to any component that needs to read data from your state object:

    ```js
    // Display a loading message while the data is fetching
    if (!something) return <h3>Loading...</h3>;

    // Display your component as normal after the data has been fetched
    return (
      {/* your normal JSX here */}
    );
    ```

2. Read through the API docs carefully. You will read through many technical docs as a developer, so start now to try and understand them.

### Task 6: Stretch (Optional!)

- [ ] Notice the optional query param `date`? You can pass a different date in your url to get the APOD from a different date. Add a date dropdown or a date picker that allows you to select a different date and see that APOD. This will be quite a bit of work, but it will be a fantastic exercise to go through a little more complicated logic and interaction in your app. This is also a very common type of interaction, so it would be good to try this out.

## Submission Format

- [ ] Submit a link to your github repo in your learning platform.

-----

## Part II - [Advanced Styling](./README_DAY_TWO.md)
