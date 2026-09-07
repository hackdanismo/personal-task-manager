// src/components/TaskItem/index.tsx

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type TaskItemProps = {
    task: Task;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
};

function TaskItem({ task, toggleTask, deleteTask }: TaskItemProps) {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />

            {task.title} - {task.completed ? "Completed" : "Not completed"}

            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    )
}

export default TaskItem;