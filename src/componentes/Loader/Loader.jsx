import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <div className='loader-container'>
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;