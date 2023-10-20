import React, { useState } from 'react'

function Filter({selectedRegion, setSelectedRegion}) {

  const regions = {
    "": "All",
    "africa": "Africa",
    "americas": "Americas",
    "asia": "Asia",
    "europe": "Europe",
    "oceania": "Oceania",
  };

  return (
    <select className="filter_region" value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
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