import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {BsArrowLeft} from "react-icons/bs"
import Header from '../components/Header';
import {formatNumber} from "../helpers"

const RESTCOUNTRIES_V3_API = "https://restcountries.com/v3.1";

function CountryDetails() {

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { name  } = useParams();

  const handleNavigation = () => {
     navigate("/");
  }

  const getCountry = async () => {
    const response = await fetch(`${RESTCOUNTRIES_V3_API}/name/${name}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();


    if (Array.isArray(data) && data.length > 0) {
      setDetails(data[0]);
    } else {
      setDetails(null); // Handle the case where data is empty or invalid.
    }

    setLoading(false);
  }

  useEffect(() => {
    getCountry();
  }, [name]);

  console.log(details);

  return (
    <>
      <Header />
      <section className='country_detail'>
        <button className='btn_goback' onClick={handleNavigation}>
          <BsArrowLeft />
        Go Back</button>

        {
          loading ? (<p>loading...</p>) : 
          details  ?
          (
            <article className="country">
              <div className="country__left">
                <img src={details.flags.png} alt={details.flags.alt} />
              </div>
              <div className="country__right">
                <h2 className="country__name">{details.name.common}</h2>
                <p>
                  Population:<span className='data'>{formatNumber(details.population)}</span>
                </p>
                <p>
                  Region:<span className='data'>{details.region}</span>
                </p>
                <p>
                  Sub Region:<span className='data'>{details.subregion}</span>
                </p>
                <p>
                  Capital:<span className='data'>{details.capital}</span>
                </p>
                <p>
                  {/* Currencies:<span className='data'>{details.currencies}</span> */}
                </p>
          
                <div className="country__borders">
                  {details.borders ? details.borders.map((border, index) => (
                    <span className='border_tag' key={index}>
                      {border}
                    </span>
                  )) : (<span className="api_placeholder">no borders</span>)} 
                </div>
              </div>
            </article>
          ): (
            <p>Data not found</p>
          )
        }

      </section>
    </>
  )
}

export default CountryDetails


// {
//   detail ? 
//   (
//     <article className='country'>
//       <div className="country__left">
//         {/* Uncomment and integrate image rendering here */}
//         <img src={detail.flags.png} alt={`${name} flag`} />
//       </div>
//       <div className="country__right">
//         {/* Uncomment and integrate other details as needed */}
//         {/* <h2 className="country__name">{detail.name.common}</h2> */}
//         {/* <h2 className="country__nativename">{detail.name.nativeName[0]}</h2> */}
//       </div>
//     </article>
//   ) 
//   :
//   (
//     <p>Loading ....</p>
//   )
// }