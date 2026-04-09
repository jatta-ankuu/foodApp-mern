import React, { useEffect, useState } from 'react';
import Card from "../Component/Card";

export default function Home() {
  const [search ,setsearch] = useState("");
  const [foodItem, setfoodItem] = useState([]);
  const [foodCategory ,setfoodCategory] = useState([]);

  let load = async ()=>{
    let response = await fetch("https://foodapp-mern-f395.onrender.com/getData",{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      }
    });
    response = await response.json();
    // console.log(response[0],response[1]);
    setfoodItem(response[0]);
    setfoodCategory(response[1]);
  }
  // useEffect(()=>{
  //   console.log("food category:", foodItem);
  // },[foodItem]);

  useEffect(()=>{
    load()
  },[]);

  return (<>
  
  <div 
  id="carouselExampleIndicators" 
  className="carousel slide" 
  style={{ height: "70vh" }}
>

  <div className="carousel-indicators" style={{ zIndex: "10" }}>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
  </div>

  <div className="carousel-inner" style={{ height: "100%" }}>

    <div className='carousel-caption' style={{ bottom: "20%", zIndex: "10" }}>
      <div className="d-flex justify-content-center">
        <input 
          className="form-control w-80 p-2"
          type="search"
          placeholder="Search..!"
          value={search}
          onChange={(e)=> setsearch(e.target.value)}
        />
      </div>
    </div>
    <div className="carousel-item active" style={{ height: "100%" }}>
      <img
        src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80"
        className="d-block w-100"
        style={{
          height: "100%",
          objectFit: "cover",
          filter: "brightness(30%)"
        }}
        alt="Burger"
      />
    </div>
    <div className="carousel-item" style={{ height: "100%" }}>
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
        className="d-block w-100"
        style={{
          height: "100%",
          objectFit: "cover",
          filter: "brightness(30%)"
        }}
        alt="Food"
      />
    </div>

    <div className="carousel-item" style={{ height: "100%" }}>
      <img
        src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1200&q=80"
        className="d-block w-100"
        style={{
          height: "100%",
          objectFit: "cover",
          filter: "brightness(30%)"
        }}
        alt="Momos"
      />
    </div>

  </div>
  <button 
    className="carousel-control-prev" 
    type="button" 
    data-bs-target="#carouselExampleIndicators" 
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button 
    className="carousel-control-next" 
    type="button" 
    data-bs-target="#carouselExampleIndicators" 
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon"></span>
  </button>

</div>




  <div className='container-fluid'>
    {
     foodCategory.length>0 
     ? foodCategory.map((data)=>{
      return (<>
        <div key={data._id} className='fs-2  text-dark m-4 p-4 text-center'>
          <span>:--</span>
          {data.CategoryName}
        </div>
        <hr/>
        
          <div className='row g-4'>
            {
              foodItem.length >0 ?
              foodItem.filter(Item =>(Item.CategoryName===data.CategoryName)&& (Item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(Item=><div className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center'>
                <Card 
                id={Item._id}
                name={Item.name}
                option={Item.options}
                imgSrc={Item.img}
                des = {Item.description}
                />
              </div>):<div>There is no data in the food Item</div>
            }
        </div>
     </> )
     })
     : <div> Blank</div>
    }
  </div>
  </>
  )
}
