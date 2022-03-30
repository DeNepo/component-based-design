# Component-Based Design

Learn to design, plan and build frontend applications using a Component-Based approach. You will explore the React library which is designed to make Component-Based design easy and efficient.

<!-- - local non-persistent state
- remote data & logic via APIs
- component-based design
- loose central state management
- single-page app -->

---

## Learning Objectives

<details>
<summary>Priorities: 🥚, 🐣, 🐥, 🐔 (click to learn more)</summary>
<br>

There is a lot to learn in this repository. If you can't master all the material
at once, that's expected! Anything you don't master now will always be waiting
for you to review when you need it. These 4 emoji's will help you prioritize
your study time and to measure your progress:

- 🥚: Understanding this material is required, it covers the base skills you'll
  need for this module and the next. You do not need to finish all of them but
  should feel comfortable that you could with enough time.
- 🐣: You have started all of these exercises and feel you could complete them
  all if you just had more time. It may not be easy for you but with effort you
  can make it through.
- 🐥: You have studied the examples and started some exercises if you had time.
  You should have a big-picture understanding of these concepts/skills, but may
  not be confident completing the exercises.
- 🐔: These concepts or skills are not necessary but are related to this module.
  If you are finished with 🥚, 🐣 and 🐥 you can use the 🐔 exercises to push
  yourself without getting distracted from the module's main objectives.

---

</details>

### [1. Rendering Static Pages](./1-rendering-static-pages)

- recreate an HTML/CSS web page using pure functions components and encapsulated styles
- functional React components

### [2. Rendering Data](./2-rendering-data)

- render a static page with provided data
- component props

### [3. Stateful Components](./3-stateful-components)

- create components that manage internal state and emit custom events
- `useState`
- handling events

### [4. Higher-Order Components](./4-higher-order-components)

- build reusable components that take functions as arguments

### [5. Global State](./5-global-state)

- store and manage global app state shared between components
- `useContext`

### [6. Consuming APIs](./6-consuming-apis)

- fetch and use API data in components
- `useEffect`

### [7. Frontend Routing](./7-frontend-routing)

- react router

[TOP](#component-based-design)

---

## Just Enough React

React is a big library with a lot of history and different ways of doing things. To help you be productive faster, you'll only be learning a small part of everything React can do.

### JSX

> JSX is not actually part of React, but they're almost always used together

### Functional Components

- props
- importing local style sheets

### Synthetic Events

- handling
- dispatching

### Hooks

- `useState`
- `useContext`
- `useEffect`

### React Router

> not part of the core React library

[TOP](#component-based-design)

---

## Project Folder Structure

The wild world of React is full of different ways to structure applications and organize your code. You'll be learning one way to do things, this architecture is simple enough to learn in a couple weeks and capable enough to build a final project.

```txt
/react project
  /public
  /src
    /api-calls
      - functions that fetch and process API data
    /components
      - React components
    /context
      - initialize React context with ../data
    /data
      - initial app state
    /logic
      - testable logic functions
    /routes
      - frontend React routes
  /LICENSE
  /package.json
  /README.md
```

### Conventions

- React component files are Pascal Case
- React component functions are Pascal Case
- React component files have the .jsx extension
- all other files & folders are Kebab Case
- all other functions are Camel Case

[TOP](#component-based-design)

---

## Study Tips

<details>
<summary>expand/collapse</summary>
<br>

- Don't rush, understand! Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass
    tests quickly and not understand why.
- Don't skip the examples! Understanding and experimenting with working code is
  a very effective way to learn programming.
- Write lots of comments in the examples and exercises. The code in this
  repository is yours to study, modify and re-use in projects.
- Practice
  [Pair Programming](https://home.hackyourfuture.be/students/study-tips/pair-programming):
  two people, one computer.
- Take a look through the
  [Learning From Code](https://home.hackyourfuture.be/students/study-tips/learning-from-code)
  guide for more study tips

### Study Board

Creating a project board on your GitHub account for tracking your study at HYF
can help you keep track of everything you're learning. You can create the board
at this link: `https://github.com/your_user_name?tab=projects`.

These 4 columns may be helpful:

- **todo**: material you have not studied yet
- **studying**: material you are currently studying
- **to review**: material you want to review again in the future
- **learned**: material you know well enough that you could help your classmates
  learn it

</details>

[TOP](#component-based-design)

---

## Getting Started

> You will need
> [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
> installed on your computer to study this material

1. Clone this repository:
   - using SSH:
     `git clone --depth 1 git@github.com:HackYourFutureBelgium/component-based-design.git`
2. navigate to the cloned repository
   - `cd component-based-design`
3. Install dependencies:
   - `npm install`

> It's highly recommended that you use either Linux or Mac. If you have a
> Windows computer you can either dual-boot your computer or install a virtual
> machine.

[TOP](#component-based-design)
