const list = [
    {
        "question": "What is React?",
        "answers": [
            { "text": "A JavaScript library for building user interfaces", "correct": true },
            { "text": "A CSS framework" },
            { "text": "A database" },
            { "text": "A programming language" }
        ]
    },
    {
        "question": "Who developed React?",
        "answers": [
            { "text": "Facebook", "correct": true },
            { "text": "Google" },
            { "text": "Microsoft" },
            { "text": "Amazon" }
        ]
    },
    {
        "question": "What is a React component?",
        "answers": [
            { "text": "A reusable piece of UI", "correct": true },
            { "text": "A database query" },
            { "text": "A backend service" },
            { "text": "A CSS file" }
        ]
    },
    {
        "question": "Which syntax is used to create components in React?",
        "answers": [
            { "text": "JSX", "correct": true },
            { "text": "HTML" },
            { "text": "Java" },
            { "text": "Python" }
        ]
    },
    {
        "question": "What is JSX?",
        "answers": [
            { "text": "JavaScript XML", "correct": true },
            { "text": "JavaScript eXtension" },
            { "text": "JavaScript eXtra" },
            { "text": "Just Simple XML" }
        ]
    },
    {
        "question": "What is the purpose of ReactDOM?",
        "answers": [
            { "text": "To render React components to the DOM", "correct": true },
            { "text": "To manage database operations" },
            { "text": "To handle HTTP requests" },
            { "text": "To style components" }
        ]
    },
    {
        "question": "Which hook is used to manage state in functional components?",
        "answers": [
            { "text": "useState", "correct": true },
            { "text": "useEffect" },
            { "text": "useReducer" },
            { "text": "useRef" }
        ]
    },
    {
        "question": "What is the virtual DOM in React?",
        "answers": [
            { "text": "A lightweight representation of the actual DOM", "correct": true },
            { "text": "A CSS engine" },
            { "text": "A database query tool" },
            { "text": "A JavaScript compiler" }
        ]
    },
    {
        "question": "How do you pass data to a component in React?",
        "answers": [
            { "text": "Using props", "correct": true },
            { "text": "Using state" },
            { "text": "Using context" },
            { "text": "Using methods" }
        ]
    },
    {
        "question": "What is a React fragment?",
        "answers": [
            { "text": "A way to group multiple elements without adding extra nodes to the DOM", "correct": true },
            { "text": "A way to style components" },
            { "text": "A new type of React component" },
            { "text": "A debugging tool" }
        ]
    },
    {
        "question": "What does the useEffect hook do?",
        "answers": [
            { "text": "Handles side effects in functional components", "correct": true },
            { "text": "Manages component state" },
            { "text": "Creates context for components" },
            { "text": "Sets up routing" }
        ]
    },
    {
        "question": "What is the default state of a useState hook?",
        "answers": [
            { "text": "It is user-defined", "correct": true },
            { "text": "It is always null" },
            { "text": "It is always undefined" },
            { "text": "It is always an empty string" }
        ]
    },
    {
        "question": "What is the key prop used for in lists?",
        "answers": [
            { "text": "To help React identify and manage items efficiently", "correct": true },
            { "text": "To style list items" },
            { "text": "To add event listeners" },
            { "text": "To render components" }
        ]
    },
    {
        "question": "What is the purpose of the Context API?",
        "answers": [
            { "text": "To share state across the component tree without props drilling", "correct": true },
            { "text": "To handle routing" },
            { "text": "To fetch data from APIs" },
            { "text": "To optimize performance" }
        ]
    },
    {
        "question": "Which lifecycle method is equivalent to useEffect with an empty dependency array?",
        "answers": [
            { "text": "componentDidMount", "correct": true },
            { "text": "componentWillUnmount" },
            { "text": "componentDidUpdate" },
            { "text": "shouldComponentUpdate" }
        ]
    },
    {
        "question": "What is the significance of React keys in lists?",
        "answers": [
            { "text": "They improve performance by helping React identify changes", "correct": true },
            { "text": "They are used for styling" },
            { "text": "They handle event listeners" },
            { "text": "They manage state" }
        ]
    },
    {
        "question": "What does the React.StrictMode component do?",
        "answers": [
            { "text": "Highlights potential problems in an application", "correct": true },
            { "text": "Renders components in production mode" },
            { "text": "Optimizes performance" },
            { "text": "Manages routing" }
        ]
    },
    {
        "question": "What is Prop Drilling?",
        "answers": [
            { "text": "Passing props through multiple layers of components", "correct": true },
            { "text": "Sharing state across components" },
            { "text": "Rendering a list of items" },
            { "text": "Optimizing performance" }
        ]
    },
    {
        "question": "What is a Higher-Order Component (HOC) in React?",
        "answers": [
            { "text": "A function that takes a component and returns a new component", "correct": true },
            { "text": "A component with more than one child" },
            { "text": "A component that handles errors" },
            { "text": "A component that fetches data" }
        ]
    },
    {
        "question": "Which method is used to update state in a class component?",
        "answers": [
            { "text": "setState", "correct": true },
            { "text": "useState" },
            { "text": "updateState" },
            { "text": "changeState" }
        ]
    },
  {
    "question": "What is the purpose of the `key` prop in React lists?",
    "answers": [
      {
        "text": "Helps React efficiently update the DOM when items in the list change.",
        "correct": true
      },
      {
        "text": "Styles the list items."
        },
      {
        "text": "Provides a unique identifier for each item in the database."
        },
      {
        "text": "Is required for all lists in React."
        }
    ]
  },
  {
    "question": "What is the difference between state and props in React?",
    "answers": [
      {
        "text": "State is internal to a component, while props are passed from parent to child components.",
        "correct": true
      },
      {
        "text": "State is immutable, while props are mutable."
        },
      {
        "text": "State is used for styling, while props are used for data."
        },
      {
        "text": "There is no difference between state and props."
        }
    ]
  },
  {
    "question": "What is JSX?",
    "answers": [
      {
        "text": "A syntax extension to JavaScript that allows you to write HTML-like code within JavaScript.",
        "correct": true
      },
      {
        "text": "A JavaScript library for building user interfaces."
        },
      {
        "text": "A CSS preprocessor."
        },
      {
        "text": "A framework for building backend APIs."
        }
    ]
  },
  {
    "question": "What is the purpose of the `useEffect` hook in React?",
    "answers": [
      {
        "text": "To perform side effects, such as fetching data or setting up subscriptions.",
        "correct": true
      },
      {
        "text": "To define the component's initial state."
        },
      {
        "text": "To render the component to the DOM."
        },
      {
        "text": "To handle user input events."
        }
    ]
  },
  {
    "question": "What is the purpose of `useContext` in React?",
    "answers": [
      {
        "text": "To share data across components without passing props down through the component tree.",
        "correct": true
      },
      {
        "text": "To manage the component's state."
        },
      {
        "text": "To handle asynchronous operations."
        },
      {
        "text": "To create custom hooks."
        }
    ]
  },
  {
    "question": "What is the difference between `setState` and `forceUpdate`?",
    "answers": [
      {
        "text": "`setState` is used for most state updates, while `forceUpdate` should be used sparingly as it bypasses React's optimizations.",
        "correct": true
      },
      {
        "text": "`setState` is asynchronous, while `forceUpdate` is synchronous."
        },
      {
        "text": "`setState` is used for props, while `forceUpdate` is used for state."
        },
      {
        "text": "There is no significant difference between them."
        }
    ]
  },
  {
    "question": "What is a higher-order component (HOC) in React?",
    "answers": [
      {
        "text": "A function that takes a component as an argument and returns a new, enhanced component.",
        "correct": true
      },
      {
        "text": "A component that renders other components."
        },
      {
        "text": "A component that manages the state of other components."
        },
      {
        "text": "A component that is reused throughout the application."
        }
    ]
  },
  {
    "question": "What is the purpose of `ref` in React?",
    "answers": [
      {
        "text": "To create a reference to a DOM element or a React component.",
        "correct": true
      },
      {
        "text": "To define the component's initial state."
        },
      {
        "text": "To handle user input events."
        },
      {
        "text": "To style the component."
        }
    ]
  },
  {
    "question": "What is the purpose of `propTypes`?",
    "answers": [
      {
        "text": "To define the types of props that a component expects to receive.",
        "correct": true
      },
      {
        "text": "To define the styles of the component."
        },
      {
        "text": "To handle errors within the component."
        },
      {
        "text": "To improve the component's performance."
        }
    ]
  },
  {
    "question": "What is the difference between a controlled and an uncontrolled component?",
    "answers": [
      {
        "text": "A controlled component's value is handled by React state, while an uncontrolled component's value is handled by the DOM.",
        "correct": true
      },
      {
        "text": "A controlled component is a class component, while an uncontrolled component is a functional component."
        },
      {
        "text": "A controlled component uses props, while an uncontrolled component uses state."
        },
      {
        "text": "There is no significant difference between them."
        }
    ]
  },
  {
    "question": "What is the purpose of `memo` in React?",
    "answers": [
      {
        "text": "To prevent a component from re-rendering unnecessarily.",
        "correct": true
      },
      {
        "text": "To improve the component's performance."
        },
      {
        "text": "To create a reusable component."
        },
      {
        "text": "To handle side effects."
        }
    ]
  },
  {
    "question": "What is the purpose of `useReducer` in React?",
    "answers": [
      {
        "text": "To manage complex state logic that involves multiple sub-values or object trees.",
        "correct": true
      },
      {
        "text": "To handle asynchronous operations."
        },
      {
        "text": "To create custom hooks."
        },
      {
        "text": "To render the component to the DOM."
        }
    ]
  },
  {
    "question": "What is the purpose of `key` prop when rendering lists?",
    "answers": [
      {
        "text": "Helps React identify which items have changed, moved, or been removed.",
        "correct": true
      },
      {
        "text": "Styles the list items."
        },
      {
        "text": "Provides a unique identifier for each item in the database."
        },
      {
        "text": "Is required for all lists in React."
        }
    ]
  },
  {
    "question": "What are React's synthetic events?",
    "answers": [
      {
        "text": "Cross-browser compatible event objects that normalize event properties and methods.",
        "correct": true
      },
      {
        "text": "Events that are triggered by the user interacting with the DOM."
        },
      {
        "text": "Events that are triggered by the browser."
        },
      {
        "text": "Events that are created by the developer."
        }
    ]
  },
  {
    "question": "What is the purpose of `propTypes` and `defaultProps`?",
    "answers": [
      {
        "text": "`propTypes` define the expected types of props, while `defaultProps` provide default values if props are not provided.",
        "correct": true
      },
      {
        "text": "Both are used for styling components."
        },
      {
        "text": "Both are used for handling errors within the component."
        },
      {
        "text": "Both are used for performance optimization."
        }
    ]
  },
  {
    "question": "What is the purpose of `shouldComponentUpdate()` in a class component?",
    "answers": [
      { "text": "To control whether the component should re-render.", "correct": true },
      { "text": "To handle side effects." },
      { "text": "To define the component's initial state." },
      { "text": "To fetch data from an API." }
    ]
  },
  {
    "question": "Explain the concept of reconciliation in React.",
    "answers": [
      { "text": "The process of comparing the previous and next virtual DOM to determine the minimal set of changes needed to update the actual DOM.", "correct": true },
      { "text": "The process of merging two React components." },
      { "text": "The process of fetching data from an API." },
      { "text": "The process of creating a new React component." }
    ]
  },
  {
    "question": "What are the different ways to pass data between components in React?",
    "answers": [
      { "text": "Props, Context API, Redux (or other state management libraries)", "correct": true },
      { "text": "Only through props." },
      { "text": "Only through Context API." },
      { "text": "Only through global variables." }
    ]
  },
  {
    "question": "What are the key differences between functional and class components in React?",
    "answers": [
      { "text": "Functional components use hooks, while class components use lifecycle methods.", "correct": true },
      { "text": "Functional components are always stateless." },
      { "text": "Class components are more performant." },
      { "text": "Functional components cannot access props." }
    ]
  },
  {
    "question": "Explain the concept of memoization in React.",
    "answers": [
      { "text": "A technique to avoid re-rendering components unnecessarily by caching their results.", "correct": true },
      { "text": "A way to optimize state updates." },
      { "text": "A method for handling side effects." },
      { "text": "A way to improve component reusability." }
    ]
  },
  {
    "question": "What is the purpose of the `useReducer` hook?",
    "answers": [
      { "text": "To manage complex state logic that involves multiple sub-values or object trees.", "correct": true },
      { "text": "To fetch data from an API." },
      { "text": "To handle user events." },
      { "text": "To create custom hooks." }
    ]
  },
  {
    "question": "What are the benefits of using a library like Redux or Zustand in a React application?",
    "answers": [
      { "text": "Improved state management, better code organization, and easier to test and debug.", "correct": true },
      { "text": "Faster rendering performance." },
      { "text": "Smaller bundle size." },
      { "text": "Reduced complexity." }
    ]
  },
  {
    "question": "Explain the concept of lazy loading in React.",
    "answers": [
      { "text": "Loading components only when they are needed, improving initial load time.", "correct": true },
      { "text": "Preloading all components in advance." },
      { "text": "Loading all data at once." },
      { "text": "A technique for optimizing state updates." }
    ]
  },
  {
    "question": "What is the role of `context` in React?",
    "answers": [
      { "text": "To share data among components without passing props down through the component tree.", "correct": true },
      { "text": "To handle user input events." },
      { "text": "To define the component's style." },
      { "text": "To improve component performance." }
    ]
  }
]
