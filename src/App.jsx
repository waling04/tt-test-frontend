import React from 'react'
import UserEditForm from './Components/UserEditForm'
import UserAddForm from './Components/UserAddForm'
import DataTable from './Components/DataTable'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DataTable/>}/>
        <Route path='/edit/:id' element={<UserEditForm/>}/>
        <Route path='/addUser' element={<UserAddForm/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
