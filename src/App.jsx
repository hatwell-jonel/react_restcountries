import { useState, useEffect } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Filter from './components/Filter'
import Card from './components/Card'

function App() {
  const [countries, setCountries] = useState([]);
  const API_RESTCOUNTRIES = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(API_RESTCOUNTRIES);
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
    fetchCountries();
  }, [])

  return (
    <>
      <Header />
      <div className='filter'>
        <Search />
        <Filter />
      </div>
      <section className="countries">
        {
          countries.map((country, index) => <Card  index={index} country={country} />)
        }
      </section>
    </>
  )
}

export default App
