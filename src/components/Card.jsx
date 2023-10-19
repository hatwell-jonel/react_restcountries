import React from 'react';
import { Link } from "react-router-dom";
import { formatNumber } from "../helpers.js";


const Card = React.memo(({  index, country }) => {
    return (
      <Link to={`/${country.name.common}`} key={index}>
        <div className='card'>
          <img src={country.flags.png} className='card_image' alt="flag" />
          <div className="card__details">
            <h2 className="card_name">{country.name.common ?? country.name.official}</h2>
            <div className="detail">
              population: <span className='detail_data'>{formatNumber(country.population)}</span>
            </div>

            <div className="detail">
              region: <span className='detail_data'>{country.region} </span>
            </div>

            <div className="detail">
              capital: <span className='detail_data'> {country.capital} </span>
            </div>
          </div>
        </div>
      </Link>
    );
});

export default Card;