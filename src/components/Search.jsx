import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"

function Search({setSearch}) {
  return (
    <div className='search'>
      <input 
      type="text" 
      placeholder="Search..." 
      onChange={(e) => setSearch(e.target.value)}
      />
      <BiSearchAlt2 />
    </div>
  )
}

export default Search