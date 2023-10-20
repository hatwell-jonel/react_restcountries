import React, {useEffect, useState} from 'react'
import {FaMoon} from 'react-icons/fa';
import {BsFillSunFill} from 'react-icons/bs';



function Header() {
  const BODY = document.body;
  const [lightTheme, setLightTheme] = useState(false);

  const setTheme = (e) => {
    setLightTheme(!lightTheme);
    console.log(lightTheme);
  }

  useEffect(() => {
    if (lightTheme) {
      BODY.setAttribute('data-theme', 'light');
      BODY.classList.add('transition-theme');
    } 
    else{
      BODY.setAttribute('data-theme', 'dark');
      BODY.classList.remove('transition-theme');
    }

  }, [lightTheme])


  return (
    <header className='header'>
        <h1>Where in the world?</h1>

        <button 
          id='btn__theme'
          onClick={setTheme}
        >
          {
            lightTheme ? 
            <>
             <BsFillSunFill />
             Light Mode
            </> 
            :
            <>
            <FaMoon />
             Dark Mode
            </>
          }
        
        </button>
    </header>
  )
}

export default Header