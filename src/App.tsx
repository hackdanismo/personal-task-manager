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
