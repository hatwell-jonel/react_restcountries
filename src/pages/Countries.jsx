import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Card from '../components/Card'

function Countries() {
    const RESTCOUNTRIES_V3_API = "https://restcountries.com/v3.1";
    const [countries, setCountries] = useState([]);
    const [endpoint, setEndpoint] = useState("all");
    const [search, setSearch] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");

    
    const fetchCountries = async () => {
        try {
            let endpointToUse = endpoint;

            if (selectedRegion) {
              endpointToUse = `region/${selectedRegion}`;
            }else{
              setEndpoint('all');
            }
            
            if (search) {
              endpointToUse = `name/${search}`;
            }else{
              setEndpoint('all');
            }


            const response = await fetch(`${RESTCOUNTRIES_V3_API}/${endpointToUse}`);
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
    }, [search, selectedRegion])

  return (
     <>
      <Header />

      <div className='filter'>
        <Search setSearch={setSearch} />
        <Filter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
      </div>

      <main className="countries">
        {
            countries.map((country, index) => <Card key={index} country={country} />)
        }
      </main>
    </>
  )
}

export default Countries
