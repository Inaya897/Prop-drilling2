import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ChildA from '../components/ChildA'
import { createContext } from 'react'
import ChildB from '../components/ChildB'
import ChildC from '../components/ChildC'

const UserContext = createContext()
function App() {

  const [count, setCount] = useState(8)
  return (
    <>
    <UserContext.Provider value = {count} >
      <ChildA/>
    </UserContext.Provider>


    </>
  )
}

export default App
export {UserContext}

