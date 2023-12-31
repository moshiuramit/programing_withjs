import { useState } from 'react'
import './App.css'
import MovieComponent from './MovieComponent'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>

    <div className=' bg-slate-50 dark:bg-slate-950'>
      <h1>Vite + React</h1>
      <p className=' text-3xl bg-cyan-600 font-bold underlin '> Hello from the ohter world </p>
      <div className='hello text-center text-red-800 font-bold fill-yellow-950'> Amkjlfj jas </div> 
      <div className="card">   

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <MovieComponent />
    </div>
    </>
  )
}

export default App
