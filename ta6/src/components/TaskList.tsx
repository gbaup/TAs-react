import {useState} from "react";

export const TaskList = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState<string[]>([])

    return (
        <>
            <h1>Tasks</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <input
                type="text"
                value={task}
                onChange={(e) => {
                    setTask(e.target.value)
                }}
            />
            <button
                onClick={() => {
                    console.log('add task')
                    setTasks([...tasks, task])
                    setTask('')
                }}
            >
                Add
            </button>
        </>
    );
};