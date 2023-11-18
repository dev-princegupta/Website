import React from 'react'
import './Main3.css'

const Main3 = () => {
  return (
    <>
    <div className='container-fluid' style={{"maxHeight":"auto","backgroundColor":"#151515"}}>


    <div className=''>
            <h1 class="ml-5" style={{"color":"white","fontSize":"60px", "display":"inline-block"}}>Our Services</h1>
            <p className="ml-2" style={{"color":"#FFFFFF","fontSize":"12px", "display":"inline-block"}}>🟧</p>
            <h4 className="ml-5" style={{"color":"#717171"}}>elevate your brand with our design solutions, delivering </h4>
            <h4 className="ml-5" style={{"color":"#717171"}}>depth and resonance</h4>
        </div>

<div className='row mt-3'>
  <div className='col-5 trans ml-5' style={{"fontSize":"60px"}}>

<h1 style={{"fontSize":"60px"}}>CAD Design</h1>
<h1 style={{"fontSize":"60px"}}>PCB Design</h1>
<h1 style={{"fontSize":"60px"}}>UI,UX Design</h1>

  </div>

  <div className='col-5 mt-3 ml-5'>
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