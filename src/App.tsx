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

  function toggleTask(id: number) {
    setTasks(
      // Loop through every task, find a matching task, copy it and change completed from false/true or true/false
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <main>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(event) => setNewTaskTitle(event.target.value)}
        />
        <button type="submit">Add task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            toggleTask={toggleTask} 
          />
        ))}
      </ul>
    </main>
  )
}

export default App
