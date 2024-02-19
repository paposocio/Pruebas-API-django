import React from 'react';
import { useEffect, useState } from "react"
import { GetTasks } from "../api/Tasks.api"

export default function TasksList() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                const res = await GetTasks()
                setTasks(res.data)
            } catch (error) {
                console.error(error)
                setTasks([])
            }
        }
        getData()
    }, [])

    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </ div>
            ))}
        </div>
    )
}
