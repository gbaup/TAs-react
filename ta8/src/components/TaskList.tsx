import {useState} from "react";
import './style.css'

export const TaskList = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState<string[]>([])

    function removeTask(index: number) {
        const newTasks = tasks.filter((_, i) => i !== index)
        setTasks(newTasks)
    }


    return (
        <>
            <h1>Tasks</h1>
            <ul>
                {tasks.map((task, index) => (
                    <div className="item">
                        <input key={index}
                               value={task}
                               onChange={(e) => {
                                   const newTasks = tasks.map((t, i) => {
                                       if (i === index) {
                                           return e.target.value
                                       }
                                       return t
                                   })
                                   setTasks(newTasks)
                               }}
                        />
                        <button
                            onClick={() => removeTask(index)}
                        >
                            x
                        </button>
                    </div>
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