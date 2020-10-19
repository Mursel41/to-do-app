## Things that are going to be done

This file lists the changes that need to be made in each stage. It is ordered in reverse chronological order, meaning that the last changes made will always be on top of the file, so that readers will not have to scroll all the way down with each task added.

## Task 08 - Thunk

With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the store's abilities, and let you write async logic that interacts with the store. Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

**TODOS**
Since we are not using an api to try thunk properly, we will add one :).
Next to our todos list we will also display a component that will show todays top headlines. Please get your API key from [here](https://newsapi.org/). We will use our beloved axios, but you are welcome to use any other methods fits you.

## Task 08 - Redux

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

Dan Abramov, one of the minds behind React has a great [tutorial](https://egghead.io/courses/getting-started-with-redux) on what is redux exactly and how to use it properly.

**TODOS**

Well, we have to integrate redux into our app.

## Task 07 - Deployment

The time has come to deploy our application somewhere. That's easy and we will follow spesific steps to deploy our app. Since gh-pages doesn't support the deployment of a server, the fact that we need localStorage to store our data paid out.

**TODOS**

1. Set up gh-pages so you can deploy the app.
2. Make sure react-router works as it should.
3. Update the app to use local storage instead of the server.
4. Deploy your app!

## Task 06 - Routing

In most of the apps out there build with any frontend framework, whenever you visit a navigation item, the url let you know where you are exactly. Routing is a big thing and tha way to do it in react is with the help of [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)

**TODOS**

1. Please install react-router-dom.
2. Create a help component re-arrange your app so you can visit your homepage and the help page. Within homepage you will find your todo app and within help a set of instructions on how to use the app.

## Task 05 - Lifecycle Methods

You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death. Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.

- Mounting – Birth of your component
- Update – Growth of your component
- Unmount – Death of your component

Now that we understand the series of lifecycle events let’s learn more about how they work.

**TODOS**

Since there is no server around to store data, we will use localStorage instead. That way we will be able to use the right lifecycle methods to retrieve the data when we mount our components.

1. Connect your app with your localStorage so it can retrieve all todos and create new ones.

## Task 04 - Events and Forms

React provides an easy way to manage events. Prepare to say goodbye to addEventListener.
Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

Forms require as well some special treatment. HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.

What we will see in this stage is

- how to handle events.
- how to send data from a child to parent.
- how to get input from a form.
- how to update our state and re-render our component.

**TODO**

1. Add event listeners so we can toggle the status of each item.
2. After making sure that the events work as they should, we need to get whatever change happened and update the data in our App.js and rerender the whole app. So we need that change to travel all the way up to the parent component.
3. Set up the form so it can add a new todo item.

## Task 03 - Props and State.

We have splitted our app into different components and now it's time to see how the data flow through components.

Short for properties, props can best be defined as a way of passing data from component to component, basically from parent to child component.

State on the other hand, stores data about the component that can change over time. Change could come in the form of user events or system events such as response to user input or server requests. Working with a state’s component normally involves setting a component’s default state, accessing the current state and updating the state.

**TODO**

1. Please create a separate component for each todo and todone item.
2. Please use props to pass the data of each item from the parent component to the child.
3. Use state to define the initial state of your app component.

## Task 02 - Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference [here](https://reactjs.org/docs/react-component.html). Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

But we don't really care about props YET!. In this task we would like to organize our app and build our components. We will design our app, we will break it into components and we will start writing our first components.

**TODO**

1. Create a design of how your app will look. Your app should contain a navigation bar, some space for your todo input form and some space for the finished todos.
2. Implement the design into components.

## Task 01 - Hello World

Here we are. Our journey with React just started and we are about to learn the sh\*t out of it. We have our basic file structure set up, thanks to `create-react-app` and we will dig in to our first task.

**Story**
We will create a simple todo app. We will build all the functionalitis from scratch so the users can be able to add new todos, check and uncheck todos as done and delete them.

**TODO**:

In this task we would like to:

1. Explore the folder structure and the javascript files. What's the entry point of our app? What is this funky html called [JSX](https://reactjs.org/docs/introducing-jsx.html)?
2. Let's try to print Hello World to our app, instread of the default message from React.
3. Let's get rid of what we don't need like unused images.
4. I don't see any .scss files around. Let's add one.
