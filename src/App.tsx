// src/App.tsx

// Add the useEffect and useState hooks
import { useEffect, useState } from "react";
// Import the component
import TaskItem from "./components/TaskItem";

function App() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  // Initial state to allow react to load the saved tasks first
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Get items from localStorage, retrieve the string
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)  // Convert the string into an array
      : [
        { id: 1, title: "Learn React components", completed: false },
        { id: 2, title: "Build task manager", completed: false },
      ];
  });

  // Add useEffect below where we declare state
  useEffect(() => {
    /*
     * Whenever tasks change, save the latest array into the browser's localStorage.
     * JSON.stringify(tasks) converts the array from JavaScript data into a text string.
     * localStorage can only store strings.
     * The string is stored under the key "tasks". 
     * This can be retrieved using: localStorage.getItem("tasks"). 
     * The string can then be converted back into an array with: JSON.parse(...)
     */
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  function deleteTask(id: number) {
    // Creates a new array containing every task except the one whose id matches the task we want to delete
    setTasks(tasks.filter((task) => task.id !== id));
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
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </main>
  )
}

export default App
