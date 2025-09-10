import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './auth/signUp'
import Login from './auth/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="signUp">
        <SignUp></SignUp>
      </div>
        <Login></Login>
    </>
  )
}

export default App
