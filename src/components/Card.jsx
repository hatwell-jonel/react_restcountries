import React from 'react'
import flag from "../assets/images/flag.png"


function Card() {
  return (
    <>
      <div className='card'>
        <img src={flag} className='card_image' alt="flag" />
        <div className="card__details">
          <h2 className="card_name">
            Philippines
          </h2>
          <div className="detail"> 
            population: <span className='detail_data'> 123123</span>
          </div>

          <div className="detail"> 
            region: <span className='detail_data'> asia </span>
          </div>

          <div className="detail"> 
            capital: <span className='detail_data'> manila </span>
          </div>
        </div>
      </div>

      <div className='card'>
        <img src={flag} className='card_image' alt="flag" />
        <div className="card__details">
          <h2 className="card_name">
            Philippines
          </h2>
          <div className="detail"> 
            population: <span className='detail_data'> 123123</span>
          </div>

          <div className="detail"> 
            region: <span className='detail_data'> asia </span>
          </div>

          <div className="detail"> 
            capital: <span className='detail_data'> manila </span>
          </div>
        </div>
      </div>

      <div className='card'>
        <img src={flag} className='card_image' alt="flag" />
        <div className="card__details">
          <h2 className="card_name">
            Philippines
          </h2>
          <div className="detail"> 
            population: <span className='detail_data'> 123123</span>
          </div>

          <div className="detail"> 
            region: <span className='detail_data'> asia </span>
          </div>

          <div className="detail"> 
            capital: <span className='detail_data'> manila </span>
          </div>
        </div>
      </div>

      <div className='card'>
        <img src={flag} className='card_image' alt="flag" />
        <div className="card__details">
          <h2 className="card_name">
            Philippines
          </h2>
          <div className="detail"> 
            population: <span className='detail_data'> 123123</span>
          </div>

          <div className="detail"> 
            region: <span className='detail_data'> asia </span>
          </div>

          <div className="detail"> 
            capital: <span className='detail_data'> manila </span>
          </div>
        </div>
      </div>

      <div className='card'>
        <img src={flag} className='card_image' alt="flag" />
        <div className="card__details">
          <h2 className="card_name">
            Philippines
          </h2>
          <div className="detail"> 
            population: <span className='detail_data'> 123123</span>
          </div>

          <div className="detail"> 
            region: <span className='detail_data'> asia </span>
          </div>

          <div className="detail"> 
            capital: <span className='detail_data'> manila </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card