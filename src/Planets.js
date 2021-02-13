import React from 'react'

function Planets({planetData, stateData }) {

console.log('from planets:',planetData)  
console.log('state data:', stateData.data)

  return (
    <div className="planet-card">
      <h2>{planetData.name}</h2>
      <div><p className="tag">Climate</p><p>{planetData.climate}</p></div>
      <div><p className="tag">Terrain</p><p>{planetData.terrain}</p></div>
      <div><p className="tag">Diameter</p><p>{planetData.diameter}</p></div>
      <div><p className="tag">Population</p><p>{planetData.population}</p></div>
    </div>
  )
}

export default Planets