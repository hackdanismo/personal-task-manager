// src/components/TaskItem/index.tsx

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type TaskItemProps = {
    task: Task;
    toggleTask: (id: number) => void;
};

function TaskItem({ task, toggleTask }: TaskItemProps) {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />

            {task.title} - {task.completed ? "Completed" : "Not completed"}
        </li>
    )
}

export default TaskItem;