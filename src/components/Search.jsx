import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"

function Search() {
  return (
    <div className='search'>
      <input type="text" placeholder="Search..." />
      <BiSearchAlt2 />
    </div>
  )
}

export default Search