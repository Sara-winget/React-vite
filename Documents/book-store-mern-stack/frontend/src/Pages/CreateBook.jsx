import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BackButton from '../Components/BackButton'
const CreateBook = () => {
const [title,setTitle]=useState('')
const [author,setAuthor]=useState('')
const [year,setYear]=useState('')
const [error,setError]=useState('')
const[msg,setMsg]=useState('')
const navigate=useNavigate()
const handleSubmit=async(e)=>{
    e.preventDefault()
    const data={title,author,publishYear:year}
    try{
        setError('')
        await axios.post('http://localhost:5555/books/create',data).then(

        )
        .then((res)=>setMsg(res.data.message || 'book created successfully'))
        //navigate('/books')
    }
    catch(e){
        setError(e.response?.data?.message || 'Error creating book')
        console.log(e)
    }
}


  return (
    <div>
        <BackButton/>
        {msg && (<div>{msg}</div>)}
        {error && (<div>{error}</div>)}
      <form onSubmit={handleSubmit}>
       <input 
       type='name'
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       placeholder='title'
       />
       <input 
       type='name'
       value={author}
       onChange={(e)=>setAuthor(e.target.value)}
       placeholder='author'
       />
       <input 
       type='number'
       value={year}
       onChange={(e)=>setYear(e.target.value)}
       placeholder='publish Year'
       />
       <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default CreateBook
