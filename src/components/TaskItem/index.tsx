// src/components/TaskItem/index.tsx
import { useState } from "react";

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type TaskItemProps = {
    task: Task;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    editTask: (id: number, newTitle: string) => void;
};

function TaskItem({ task, toggleTask, deleteTask, editTask }: TaskItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);

    function saveEdit() {
        if (!editedTitle.trim()) return;

        editTask(task.id, editedTitle);
        setIsEditing(false);
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />

            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(event) => setEditedTitle(event.target.value)}
                    />

                    <button onClick={saveEdit}>Save</button>
                </>
            ) : (
                <>
                    {/* {task.title} */}

                    <button onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </>
            )}

            {task.title} - {task.completed ? "Completed" : "Not completed"}

            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    )
}

export default TaskItem;