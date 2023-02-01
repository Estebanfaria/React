import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <div className='loader-container'>
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;