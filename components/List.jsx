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
        setData(data)
        setLoading(false)
      })
      .then(JSON.stringify(data))
      .then(localStorage.setItem('houses', JSON.stringify(data)))
      .then(console.log(localStorage.getItem('houses')))
  }, [data])

  if (loading) {
    return <div>Loading...</div>
  }

  const handleClick = () => {
    localStorage.setItem('houses', JSON.stringify(data))
  }
  
  return (
    <div className='flex flex-col gap-10'>
      <h1>Wizarding World Houses</h1>
      <div className="flex flex-row justify-center align-middle gap-20 pl-20 ml-20">
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

      <div className='flex flex-row justify-center align-middle'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Store in your database
        </button>
      </div>

    </div>
  )
}

export default List