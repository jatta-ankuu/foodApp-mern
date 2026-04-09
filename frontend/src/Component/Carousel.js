import React from 'react'

export default function Carousel() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide"  > 
        <div className="carousel-indicators" style={{zIndex:"10"}}>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner" id='forstyle' >
 <div className='carousel-caption' style={{bottom: "25%",zIndex:"10"}}>
                  <form className="d-flex">
      <input className="form-control me-5 p-2 " type="search" placeholder="Search..!" aria-label="Search"></input>
      {/* <button className="btn btn-danger" type="submit">Search</button> */}
    </form>
        </div>
          <div className="carousel-item  active">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80"
              style={{height: "450px",
    objectFit: "cover",filter:"brightness(30%)"}}
              className="d-block w-100 images"
              alt="Burger"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
              style={{height: "450px",
    objectFit: "cover",filter:"brightness(30%)"}}
              className="d-block w-100 images"
              alt="Food"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1200&q=80"
              style={{height: "450px",
    objectFit: "cover",filter:"brightness(30%)"}}
              className="d-block w-100 images"
              alt="Momos"
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </>
  )
}
