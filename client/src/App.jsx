import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskFormPage from './pages/TaskFormPage'
import TaskPage from './pages/TaskPage'
import Navigation from './components/Navigation'

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/tasks' exact Component={TaskPage} />
        <Route path='/tasks/create' exact Component={TaskFormPage} />
      </Routes>
    </BrowserRouter>
  )
}