import React from 'react'
import {FaMoon} from 'react-icons/fa';


function Header() {
  return (
    <header className='header'>
        <h1>Where in the world?</h1>

        <button id='btn__theme'>
            <FaMoon />
            Dark Mode
        </button>
    </header>
  )
}

export default Header