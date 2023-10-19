import React, { useState } from 'react'

function Filter() {

  const [selectedRegion, setSelectedRegion] = useState("");
  
  const regions = {
    "all": "All",
    "africa": "Africa",
    "americas": "Americas",
    "asia": "Asia",
    "europe": "Europe",
    "oceania": "Oceania",
  };

  const handleChange = (e) => {
    setSelectedRegion(e.target.value);
  };


  return (
    <select className="filter_region" value={selectedRegion} onChange={handleChange}>
        <option value="" hidden>Filter by Region</option>
      {
        Object.entries(regions).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))
      }
    </select>
  )
}

export default Filter