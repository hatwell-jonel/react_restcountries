import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Filter from './components/Filter'
import Card from './components/Card'

function App() {

  return (
    <>
      <Header />
      <div className='filter'>
        <Search />
        <Filter />
      </div>
      <section className="countries">
        <Card />
      </section>
    </>
  )
}

export default App
