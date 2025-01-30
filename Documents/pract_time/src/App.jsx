import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  return (
    <>
    <div className='shadow-black shadow-lg flex flex-col justify-start  w-150 h-150' >
      <div className=' mt-2 py-2 '>
        <h1 className='text-center text-2xl'>Login form</h1>
      </div>
      <div className='ml-20 mt-10 mr-20 mb-10 h-120 shadow-lg'>
        <form className='flex flex-col m-5'>
          <div className='flex'>
            <label>
              Email
            </label>
            <div  className='justify-self-center px-20  text-center abc'>
               
              <input  type='email' name='email' required value={email} autoComplete='email' onChange={(e)=>e.target.value} placeholder='enter your mail ' className='border-2 border-red-400 text-center'/>
            </div>
          </div>
          <div className='flex'>
            <label>
              Email
            </label>
            <div  className='justify-self-center px-20  text-center abc'>
               
              <input  type='email' name='email' required value={email} autoComplete='email' onChange={(e)=>e.target.value} placeholder='enter your mail ' className='border-2 border-red-400 text-center'/>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
