import React from 'react'
// import Filter from './Filter'
import List from './list'
import MyAcounts from './MyAcounts'


const Body = () => {
  const containerStyle = {
    background: 'url("https://source.unsplash.com/random")', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className='w-full border p-3' style={containerStyle}>
      {/* <Filter/> */}
   <div className='flex flex-wrap'><List/></div>
   <div className='flex flex-wrap'><MyAcounts/></div>
    </div>
  )
}

export default Body