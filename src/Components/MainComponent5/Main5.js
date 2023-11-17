import React from 'react'

const Main5 = () => {
  return (
    <>
    <div className='container-fluid pl-5' style={{"maxHeight":"auto","backgroundColor":"#151515",paddingTop:"100px"}}>
        
        <h2 style={{color: '#717171'}}>Don't take our word for it,</h2>
        <h2 style={{color: '#717171'}}>listen to our satisfied clients <p  style={{"color":"#FFFFFF",fontSize:"12px" ,"display":"inline-block"}}>🟧</p></h2>
        


        <div className='d-flex align-items-center '>
          {/* Image and Text merged */}
          <img
            src='Assets/images/Main5(1).png'
            alt='Client Image'
            style={{ width: '121px', height: '121px', borderRadius: '8px' }}
          />
          <div className='ml-5 ' style={{ color: 'white',marginTop:"100px" }}>
            <h4 >"MLVOLT's headphone service exceeded my expectations,delivering </h4 >
            <h4 > sleek,innovative,and top quality designs. impressive work!" </h4 >
            <h4 className="mt-5" style={{color:"#FF6006"}}>Mr. Amit Sinha</h4>
            <p style={{color: '#717171'}}>Entrepreneur</p>
          </div>
        </div>


        <div className='d-flex align-items-center '>
          {/* Image and Text merged */}
          <img
            src='Assets/images/Main5(2).png'
            alt='Client Image'
            style={{ width: '120px', height: '120px', borderRadius: '8px' }}
          />
          <div className='ml-5 ' style={{ color: 'white',marginTop:"100px" }}>
            <h4 >"Exceptional PCB design services-precision,innovation, and reliability at </h4 >
            <h4 > at their finest.Our projects's secret weapon!" </h4 >
            <h4 className="mt-5" style={{color:"#FF6006"}}>Dr. Jitendra Gupta </h4>
            <p style={{color: '#717171'}}>Professor</p>
          </div>
        </div>


    </div>
    </>
  )
}

export default Main5