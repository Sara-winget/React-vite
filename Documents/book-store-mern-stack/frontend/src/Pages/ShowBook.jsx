import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'

const ShowBook = () => {
    const [book, setBook] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:5555/books/fetch/${id}`)
        .then((res) => {
            setBook(res.data.data)
            setLoading(false)
        }).catch((e) => {
            console.log(e)
            setLoading(false)
        })
    }, [id])

    return (
        <div>
            <BackButton/>
            <h1>Show book</h1>
            {loading ? (
                <Spinner/>
            ) : (
                <div>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.publishYear}</p>
                </div>
            )}
        </div>
    )
}

export default ShowBook