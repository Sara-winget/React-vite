import {Link} from 'react-router-dom'
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
const BackButton = ({destination='/'}) => {
  return (
    <div>
      <Link
      to ={destination}
      >
<BsArrowLeft className='text-2xl'/>
      </Link>
    </div>
  )
}

export default BackButton
