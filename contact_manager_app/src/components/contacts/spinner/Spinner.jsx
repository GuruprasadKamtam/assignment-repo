import React from 'react'
import spinnerImg from "../../../assets/loading-buffering.gif";

const Spinner = () => {
  return (
    <>
        <img src={spinnerImg} alt='' className='d-flex m-auto' style={{width: "200px"}}/>
    </>
  )
}

export default Spinner
