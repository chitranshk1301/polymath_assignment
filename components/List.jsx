'use client'

import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'

const List = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://wizard-world-api.herokuapp.com/Houses`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Wizarding World Houses</h1>
      <div className="card-container">
        {data.map((house, index) => {
          return (
            <Card
              key={index}
              name={house.name}
              founder={house.founder}
              animal={house.animal}
              colors={house.colors}
              ghost={house.ghost}
              common_room={house.common_room}
              image={house.image}
              element={house.element}
            />
          )
        })}
      </div>

    </div>
  )
}

export default List