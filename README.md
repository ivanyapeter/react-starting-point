# React Starting Point

I created this list of simple React example compiled from many resources I can find on the internet.

The example will examine one aspect of react at a time, slowly build up bit by bit to more complex concept of react.

The examples development environment are based on create-react-app to jump into React right away.

### TOC
1. Component in React and JSX
2. Props and States
3. Type of Components in React (Functional and Class components)
5. 

#### Component in React
- Show how component seperated
- Get print out
- no state, no props.
- Just create several components to show parent-child components structure
- This will include JSX syntax
- Example: Create app component, create box component, create button component, attach 2 button component in a box component

#### Component passing props
- using the previous code
- add props from parent props to child
- multiple components passing different props
- props are read-only concept

#### Adding state
- using the previous code
- changing state (setState)

#### Types of components
- using previous code, this will need to come together with state
- which component to use on what situation
- do exercise until we have found issue on state management and can be solved using component lifecycle

#### Component lifecycle
- using previous code
- componentDidMount and componentWillUnmount

#### setState
- more details and principle behind this method
- do not modify state directly (use setState method, don't do manual overwrite)
- state updates may be asyn
- there are 2 forms of setState(), one accepts object, another one accept functions. show the different, when and why to use it.
- state updates are merged

#### Handling Events
- several ways to call function
- binding solution and issues
- passing argument and recommendation

#### Conditional rendering
- using if
- changing state
- Inline If with Logical && Operator
- Preventing Component from Rendering, component return null

#### Key & Listing
- when rendering list of data from array, react need key to manage the state
- show example with warning
- show how to solve and what's wrong place to put ```key```
- where key come from
- unique among siblings
- embedding map() in JSX

#### Forms
- Controled components
- example of each HTML element implementation
- implement full form with disabled, etc
- then introduce uncontrolled components

#### More complex example
- lifting state up
- one way state
- state value used by multiple components

#### Composition vs Inheritance
- Containment example, usage of special ```children``` props
- Containment concept allow us to define a function component html, css, js structure that takes props from other components.
- This allow Containment component to have similar look but has different content and possibly different structure defined by this extended component.
- specialization example, split out components, passing in props.

#### Thinking in React
- Recap on React way of spliting components, passing state and props
- React specific mechanism: Lifecycle, key and list, event handling, conditional rendering, forms


Function component: Stateless Component. Presentation only component, does not have any state/logic.

Class component: Component that has state. Could have logic and manage the data flow, presentational logic (show/hide)

onClick handler need function reference not function call

All the example bootstrap with create-react-app

### 01-props-state
- Function and Class component
- Initialise state
- JSX Syntax
- Props from attribute
- State changes
- Function call

### 02-increase-decrease
- Function and Class component
- Initialise state
- JSX Syntax
- Props for Function Component syntax
- Props for Class Component syntax
- State changes
- Function calls

### 03-to-do
- Function and Class component
- Initialise state
- Listing & Key
- Import Function Component
- Function calls

### 04-simple-api
- Class Component
- Initialise state
- Function calls
- Calling API

### 05-componenet-lifecycle
- Class Component
- Initialise State
- Function calls
- Component Lifecycle demo

### 06-testing
- Testing using Jest
- Incomplete

### 07-github-api
- Use GitHub API to populate UI
- Take user input
- Style
- One way data binding. Do not get cought up.

### 08-play-nine
- Class Component
- Initialise State
- Function calls
- Initialise State and Reset function using initialise state

To Do:
- Organise examples in smaller chunks
- Show example at the very core before showing best practices if best practices are not the most bare way to achieve the desired goal
- Show best practices