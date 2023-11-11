import React from 'react'
import './main.css'

const Main = () => {
  return (
    <>
      <div className='mydiv' style={{ "maxHeight": "auto", "backgroundColor": "#151515" }}>

        <div class="container-fluid " >
          <div class="row ">
            <div class="col mt-3" style={{ "color": "white" }}>
              <h4 class="ml-4"> Converting ideas into reality through</h4>
              <div className='ml-4'>
                <h1 style={{ "color": "#FF6006", "fontSize": "70px"  }}>Product</h1>
                <h1 className='mr-4 ' style={{ "color": "#FFFFFF", "fontSize": "70px" }}>Design</h1>

                <div class='ml-2 mt-3'>
                  <h6>An Affordable Industrial </h6>
                  <h6>Product Design Agency</h6>
                </div>

                <div className='mt-5 '>
                  <img class="rounded-circle " alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" style={{ "maxWidth": "10%", "border": "2px solid #007BFF" }} />

                  <img class="rounded-circle " alt="avatar2" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" style={{ "maxWidth": "10%", "border": "2px solid #007BFF", "marginLeft": "-15px" }} />

                  <img class="rounded-circle " alt="avatar2" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" style={{ "maxWidth": "10%", "border": "2px solid #007BFF", "marginLeft": "-15px" }} />
                </div>

                <div className="rating">
                  <i className="fas fa-star ml-2 mt-2" style={{ color: '#FF6006', fontSize: '24px' }}></i>
                  <i className="fas fa-star ml-2 mt-2" style={{ color: '#FF6006', fontSize: '24px' }}></i>
                  <i className="fas fa-star ml-2 mt-2" style={{ color: '#FF6006', fontSize: '24px' }}></i>
                  <i className="fas fa-star ml-2 mt-2" style={{ color: '#FF6006', fontSize: '24px' }}></i>
                  <i className="far fa-star ml-2 mt-2" style={{ color: '#FF6006', fontSize: '24px' }}></i>
                </div>

              </div>
            </div>

            <div className='myanimation ' style={{"marginRight":"150px"}}>

              <div class="image-container " style={{ "float":"left"}}>
                <img src="Assets/images/head_phone-removebg-preview 5.png" alt="Image 1" class="image active" />
                <img src="Assets/images/image2.png" alt="Image 2" class="image" />
                <img src="Assets/images/image3.png" alt="Image 3" class="image" />
                <img src="Assets/images/image4.png" alt="Image 4" class="image" />
              </div>

              <div class=" text-container mt-5" >
                
                <div className='text ' >
                <h4  style={{ "color": '#FF6006' }}>Head Phone Design</h4>
                  <h6 style={{"color":"white"}}>Mr. Amit Sinha</h6>
                </div>
                
                <div className='text ' style={{"marginTop":"-55px"}}>
                <h4  style={{ "color": '#FF6006'   }}>Ear Pod Design</h4>
                  <h6 style={{"color":"white"}}>Dr. kamlesh verma</h6>
                </div>

                <div className='text ' style={{"marginTop":"-60px"}}>
                  <h4  style={{ "color": '#FF6006' }}>Smart Bottle Design</h4>
                  <h6 style={{"color":"white"}}>Sarah Johnson</h6>
                </div>

                <div className='text ' style={{"marginTop":"-55px"}}>
                  <h4  style={{ "color": '#FF6006' }}>Smart Lamp Design</h4>
                  <h6 style={{"color":"white"}}>Jessica Miller</h6>
                </div>
              

              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Main