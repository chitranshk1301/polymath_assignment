import React from 'react'


const Card = (props) => {
  return (
  <div className="max-w-sm rounded overflow-hidden shadow-lg drop-shadow-xl border-solid border hover:shadow-2xl">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{props.name}</div>
      <p className="text-black text-base">
      {props.founder}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.animal}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.element}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.ghost}</span>
    </div>
  </div>
  )
}

export default Card