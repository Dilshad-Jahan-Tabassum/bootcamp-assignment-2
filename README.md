# CS- Ticket System


- What is JSX, and why is it used?
Ans: JSX(JavaScript XML) is a syntax that used in React and it allows developers to write code like HTML inside JavaScript. It makes UI easy to read and understand when building components.

- What is the difference between State and Props?
Ans: State is internal and mutable. State is used inside a component. So, whenever the state changes the components re-renders. And props are basically a data which passed from parent to child components. So, it is immutable and read-only.

- What is the useState hook, and how does it work?
Ans: The useState hook in React used to create and manage state in a functional component. It returns two things- one is current state value and another one is a state which will update the function. So, useState hook store the data that can change over time. 

- How can you share state between components in React?
Ans: In React state can be shared between components through props drilling which is called lifting up state. From a parent component of the components props are passes it down to the child component. 

- How is event handling done in React?
Ans: Event handling in React is done using camelCase names like onClick, onChange. When the event occurs React calls the function to perform the tasks. Like, handling user input or updating state.