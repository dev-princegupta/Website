import React from 'react'
import './Main3.css'

const Main3 = () => {
  return (
    <>
    <div className='container-fluid' style={{"maxHeight":"auto","backgroundColor":"#151515"}}>


    <div className=''>
            <h1 class="ml-5 mt-5" style={{"color":"white","fontSize":"60px", "display":"inline-block"}}>Our Services</h1>
            <p className="ml-2" style={{"color":"#FFFFFF","fontSize":"12px", "display":"inline-block"}}>🟧</p>
            <h4 className="ml-5 mt-2" style={{"color":"#717171"}}>Elevate your brand with our design solutions, delivering </h4>
            <h4 className="ml-5" style={{"color":"#717171"}}>depth and resonance</h4>
        </div>

<div className='row mt-5'>
  <div className='col-5 trans ml-5' style={{"fontSize":"60px"}}>

<h1 style={{"fontSize":"80px"}}>CAD Design</h1>
<h1 style={{"fontSize":"80px"}}>PCB Design</h1>
<h1 style={{"fontSize":"80px"}}>UI,UX Design</h1>

  </div>

  <div className='col-5 mt-5 ml-5'>
<h2 style={{"color":"white"}}> Ready to dive </h2>
<h2 style={{"color":"white"}}> deeper ?</h2>

<button
  type="button"
  className="btn btn-outline-warning mt-4"
  style={{ borderWidth: '2px', padding: '10px 20px',
  borderColor: '#FF6006',
  color: '#717171',fontWeight:"bold" }}
>
  View all services
</button>


  </div>

  </div>

    </div>
    </>
  )
}

export default Main3