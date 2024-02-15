import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <h1>Aplicacion de tareas</h1>
            <Link to='/tasks'>Volver</Link>
            <Link to='/tasks/create'> Crear tarea</Link>
        </div>
    )
}
