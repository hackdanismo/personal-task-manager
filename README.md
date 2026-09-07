# Personal Task Manager

## Setup and Install React
To setup and install `React`, use `Vite`. `Vite` will ask for a project name, this can be `personal-task-manager` and select `React`:

```shell
$ npm create vite@latest
```

<img width="858" height="421" alt="Install React using Vite." src="https://github.com/user-attachments/assets/cf39b0eb-48ed-4de7-b1b7-c9929ad27383" />

<img width="859" height="294" alt="Select TypeScript from the available options." src="https://github.com/user-attachments/assets/4e643459-1f18-48a6-8566-ed409a102f4c" />

<img width="860" height="263" alt="Selecting ESLint." src="https://github.com/user-attachments/assets/29a59c3c-da3f-457d-affc-9f4de74587ed" />

Make sure the `.gitignore` file has been added to prevent files and directories, such as `node_modules`, from being added to version control.

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## Run the Development Server
Once `React` has been setup and installed using `Vite`, run the development server locally.

```shell
$ cd personal-task-manager
$ npm run dev
```

The local development server will run and the application can be viewed here: `http://localhost:5173/`.

<img width="1616" height="919" alt="The React application running locally." src="https://github.com/user-attachments/assets/b64b8672-246f-458b-8bd5-f86d0ff7ab48" />

## Clean Install
Once `React` has been installed and setup, remove the boileplate code. Within the `src/App.tsx` file remove all code to leave:

```typescript
// src/App.tsx

function App() {
  return (
    <>
      <h1>Hello, World</h1>
    </>
  )
}

export default App
```

In the `src/main.tsx` file, update the code to remove the `index.css` reference:

```typescript
// src/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## Initial List
The initial list is a hard-coded array named `tasks` containing two tasks. Each item in the array is an `object`. A `map()` is then used to loop over the array and render the tasks onto the page. This change was made in the `src/App.tsx` file:

```typescript
// src/App.tsx

function App() {
  const tasks = [
    { id: 1, title: "Learn React components", completed: false },
    { id: 2, title: "Build task manager", completed: false },
  ];

  return (
    <main>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
```

+ `tasks.map(...)` loops through every item in the `tasks` array.
+ `(task) => (...)` is an arrow function. Each item in the array is temporarily called `task`.
+ `<li key={task.id}>` creats one list item for each task.
+ `key={task.id}` gives React a unique identifier for each list item.
+ `{task.title}` displays the task's title.

## Components
Components are reusable pieces of React UI. A component is usually a function that returns JSX. Within our React application, add a `components/` folder into the `src/` directory.

Once done, add a file named `TaskItem.tsx`. This is a component to render each task and is written in `TypeScript` so props have data types using the `type` object. 

```typescript
// src/components/TaskItem/index.tsx

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type TaskItemProps = {
    task: Task;
};

function TaskItem({ task }: TaskItemProps) {
    return <li>{task.title}</li>
}

export default TaskItem;
```

Within the `App.tsx` file, import this component as the first line:

```typescript
import TaskItem from "./components/TaskItem";
```

Then, update the `App` component to render the `TaskItem` component:

```typescript
// src/App.tsx

// Import the component
import TaskItem from "./components/TaskItem";

function App() {
  const tasks = [
    { id: 1, title: "Learn React components", completed: false },
    { id: 2, title: "Build task manager", completed: false },
  ];

  return (
    <main>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </main>
  )
}

export default App
```

We render the component and pass in the `task` into the `prop` in the component itself:

```typescript
<TaskItem key={task.id} task={task} />
```

## Adding State
The list can now be updated with the `useState` hook. This will allow the task list to be `stateful`. Currently the `tasks` array is fixed. Using `useState` will allow React to remember and update the list so tasks can be added and removed.

The `tasks` is the current array of tasks, `setTasks` will be the function we will use to change it.

Update the `src/App.tsx` file to include `useState`.

```typescript
import { useState } from "react";
```

This line of code sets the `state`:

```typescript
const [tasks, setTasks] = useState<Task[]>(...)
```

+ `useState(...)` is a React hook. It lets the component remember a value between renders.
+ `tasks` is the current value. In this case, it will be an array of tasks.
+ `setTasks` is the function used to replace the value with a new one.

The `<Task[]>` is `TypeScript`, just meaing `Task[]` as an array of the `Task` object.

This now means that our `tasks` array is now stored in React state. React will keep track of the array and when we call the function: `setTasks(...)`, React will update the state and re-render the component so the UI reflects the new tasks.

This is only in-memory state, so if we refresh the browser, the tasks will reset to the default. This is unless we save the changes somewhere persistent like `localStorage` or a `database`.

Here's the full updated `src/App.tsx` file:

```typescript
// src/App.tsx

// Add the useState hook
import { useState } from "react";
// Import the component
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React components", completed: false },
    { id: 2, title: "Build task manager", completed: false },
  ]);

  return (
    <main>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </main>
  )
}

export default App
```

## Add Tasks
A task list is useful if we're able to add and remove tasks. For this, we need an input field that will allow a user to enter a task to be added. Begin by creating the input element within the `src/App.tsx` file.

A button element is added alongside to submit a task.

```html
<input
    type="text"
    value={newTaskTitle}
    onChange={(event) => setNewTaskTitle(event.target.value)}
/>
<button>Add task</button>
```

A second part of the state needs to also be added. This is for the `controlled inputs` to store the value of the text being typed into the input field.

```typescript
const [newTaskTitle, setNewTaskTitle] = useState("");
```

At this point, typing into the input updates the `newTaskTitle` in state. The button will not work currently.

```typescript
// src/App.tsx

// Add the useState hook
import { useState } from "react";
// Import the component
import TaskItem from "./components/TaskItem";

function App() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React components", completed: false },
    { id: 2, title: "Build task manager", completed: false },
  ]);

  return (
    <main>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(event) => setNewTaskTitle(event.target.value)}
      />
      <button>Add task</button>

      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </main>
  )
}

export default App
```

### Update the Button
The button needs to have a function to enable a task to be added to the task list. Begin by updating the button with `onClick` to call a function named: `addTask`:

```html
<button onClick={addTask}>Add task</button>
```

Add the `addTask` function that will be used to update the app with a new task.

```typescript
function addTask(event: React.FormEvent<HTMLFormElement>) {
    // Prevent default form submission
    event.preventDefault();
    // Do nothing if the task input field is empty to avoid adding empty tasks
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
        id: Date.now(),
        title: newTaskTitle,
        completed: false,
    };

    // Update state with the new task
    setTasks([...tasks, newTask]);
    // Clear the input field state once task has been added
    setNewTaskTitle("");
}
```

Wrapping the `input` and `button` in a `<form>` element will also allow `Enter` to be pressed to add a task. Using the form's `onSubmit` event will prevent the browser's default form submission.

```typescript
<form onSubmit={addTask}> ... </form>
```

The full updated code:

```typescript
// src/App.tsx

// Add the useState hook
import { useState } from "react";
// Import the component
import TaskItem from "./components/TaskItem";

function App() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React components", completed: false },
    { id: 2, title: "Build task manager", completed: false },
  ]);

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    // Prevent default form submission
    event.preventDefault();
    // Do nothing if the task input field is empty to avoid adding empty tasks
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };

    // Update state with the new task
    setTasks([...tasks, newTask]);
    // Clear the input field state once task has been added
    setNewTaskTitle("");
  }

  return (
    <main>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(event) => setNewTaskTitle(event.target.value)}
        />
        <button onClick={addTask}>Add task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </main>
  )
}

export default App
```