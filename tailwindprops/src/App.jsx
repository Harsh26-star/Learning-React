import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : 'Harsh',
    age : 32
  }

  let newArr = [1,3,5,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card title = 'Chai aur code' btnText = 'Click me'/>
      <Card title = 'This is the title' btnText= 'Read more'/>
    </>
  )
}

export default App
