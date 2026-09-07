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
