# Rendering Static Page

## JSX

React is already helping us a bit by cleaning up some of the verbose vanilla JS APIs. However in a typical React application you would still use a lot of the React.createElement function. To improve the developer experience the React team developed JSX.

JSX is a syntax sugar that looks like HTML, but is actually converts to the React.createElement function when you run it. Most people using React use JSX to write their components.

````
const element = <div>Hello World</div>;
````

## React Components

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

````js
import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
  return <div>Hello World</div>;
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
````

There are 3 important parts in this code:

1. First we import `React`. This is important because JSX is converted to `React.createElement` calls. If the React variable is undefined then this will fail.
2. We create a React component called `HelloWorld`.
3. We render the `HelloWorld` component into the element with the id of `root`.

### Component Composition

You can combine a component with another component to render both. This is called ``composition``

````js
const Greeting = () =>{
  return (<span>Hello</span>);
}

function Mentor= () => {
  return (<span>Ali</span>;
  );}

const HelloWorld = () => {
  return (
    <div>
      <Greeting />
      <Mentor />
    </div>
  );
}
````

In the `HelloWorld` component we are using a reference to the `Greeting` and `Mentor` components. React reads these references when rendering `HelloWorld` and so it renders the `Greeting` and `Mentor` child components.

We are also using some shorter syntax within the HelloWorld component. `<Greeting />` is a shorter way of writing `<Greeting></Greeting>`, which is useful if we don't need to put anything inside the Greeting component.

Notice how the components that we write (`HelloWorld`, `Greeting`, `Mentor`) are written using a `camel case` convention and always start with an uppercase letter. And "regular DOM" components (div, span) are always lowercase? This is a convention to let you know whether you are using a "regular DOM component" or a component that you have written. When you're making your own components, you should always start them with an uppercase letter.



## HTML to Components

Use `create-react-app` to create a React application
You have to recreate the [HTML/CSS](../1-rendering-static-pages/html-to-components/exercises/) web pages using pure functions components and encapsulated styles.For each excrecise you have to create a new repository from the starter template.
