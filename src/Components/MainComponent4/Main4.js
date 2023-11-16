import React from 'react'

const Main4 = () => {
  return (
    <>
    <div className='container-fluid' style={{"maxHeight":"auto","backgroundColor":"#151515"}}>

<div className='row'>

<div className='col-6'>

<img src="Assets/images/Main4.png" alt="Image 2"  />

</div>

<div className='col-4   ' style={{marginTop:"350px",marginLeft:"200px"}}>


<h1 style={{"color":"white",fontSize:"50px"}}> Our Work </h1>

<button
  type="button"
  className="btn btn-outline-warning mt-4 ml-4"
  style={{ borderWidth: '2px', padding: '10px 40px',
  borderColor: '#FF6006',
  color: '#717171',fontWeight:"bold" }}
>
  View More
</button>


<img className=' ml-5' style={{marginTop:"100px"}} src="Assets/images/Arrow.png" alt="Arrow"  />

</div>

</div>

    </div>
    </>
  )
}

export default Main4