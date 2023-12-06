import React from 'react'
const Card = ({ cardInfo }) => {
  console.log('cardInfo:', cardInfo);
  return (
    <div className='bg-white p-2 mt-2 shadow-md rounded-md flex-shrink-0'> {cardInfo && cardInfo.title}</div>
  )
}

export default Card