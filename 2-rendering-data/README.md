# Rendering Data

## Embedding JavaScript into JSX

Anything in the JSX that is inside curly braces `{}` is interpreted as a regular JavaScript expression.

````js
function Greeting() {
  const greetingWord = "Hello";

  return <span>{greetingWord}</span>;
}
````

Instead of hard-coding the greeting in the `Greeting` component, we are using a variable. Remember that everything between the curly braces is just regular JavaScript.

## props

Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.

![props-1-min](https://www.freecodecamp.org/news/content/images/2021/02/props-1-min.gif)

## Arrays of components

React natively knows how to deal with arrays of components, so if we need to render multiple components we can put them in an array, and then put the array directly into the JSX

## Creating Compontents with .map()

`.map()` is an especially useful iteration method for React
`.map()` takes an array and returns a transformed new array
It  can be used to generate an array of components from an array of data within JSX using `{}`

````js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{ number }</li>
  );
  return (
    <ul>
      { listItems }
    </ul>
  );
}

}
const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);;


````
