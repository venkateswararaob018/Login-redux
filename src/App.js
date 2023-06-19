import React from 'react'
import Login from './Login'
import Logout from './Logout'

import './App.css'
import { useSelector } from 'react-redux'
import { selectUser } from './Features/userSlice'

const App = () => {

  const user = useSelector(selectUser)
  return (
    <div>
   
      {user ? <Logout/> : <Login/>}
    </div>
  )
}

export default App
