import { useState } from "react"


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-300" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor("Violet")}
          className="outline-none px-4 rounded-full text-black shadow-lg" style={{backgroundColor: "Violet", textShadow: "1px 1px 2px white"}}>Violet</button>
          <button 
          onClick={() => setColor("Indigo")}
          className="outline-none px-4 rounded-full text-black shadow-lg" style={{backgroundColor: "Indigo", textShadow: "1px 1px 2px white"}}>Indigo</button>
          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 rounded-full text-black shadow-lg" style={{backgroundColor: "Green", textShadow: "1px 1px 2px white"}}>Green</button>
          <button 
          onClick={() => setColor("Yellow")}
          className="outline-none px-4 rounded-full text-black shadow-lg" style={{backgroundColor: "Yellow", textShadow: "1px 1px 2px white"}}>Yellow</button>
          <button 
          onClick={() => setColor("Orange")}
          className="outline-none px-4 rounded-full text-black shadow-lg" style={{backgroundColor: "Orange", textShadow: "1px 1px 2px white"}}>Orange</button>
          <button 
          onClick={() => setColor("Purple")}
          className="outline-none px-4 rounded-full text-black shadow-lg" style={{backgroundColor: "Purple", textShadow: "1px 1px 2px white"}}>Purple</button>
          <button 
          onClick={() => setColor("Blue")}
          className="outline-none px-4 rounded-full text-black shadow-lg" style={{backgroundColor: "Blue", textShadow: "1px 1px 2px white"}}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
