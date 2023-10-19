import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Card from '../components/Card'

function Countries() {
    const [countries, setCountries] = useState([]);
    const [api, setApi] = useState('https://restcountries.com/v3.1');
    const [endpoint, setEndpoint] = useState("all");
    const [search, setSearch] = useState("");


    
    const fetchCountries = async () => {
        try {
            if(search == "name/"){
                setEndpoint("all"); 
            }else{
                setEndpoint(search) 
            }

            const response = await fetch(`${api}/${endpoint}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
  
            // Sort the countries array alphabetically by name
            data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    
            setCountries(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
    useEffect(() => {
      fetchCountries();
    }, [search])


  return (
     <>
      <Header />
      <div className='filter'>
        <Search search={search} setSearch={setSearch} />
        <Filter />
      </div>
      <section className="countries">
        {
            countries.map((country, index) => <Card key={index} country={country} />)
        }
      </section>
    </>
  )
}

export default Countries

// https://restcountries.com/v3.1/all
// https://restcountries.com/v3.1/name/{name}
// https://restcountries.com/v3.1/region/{region}