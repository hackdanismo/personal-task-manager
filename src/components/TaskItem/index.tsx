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