import React,{useState} from 'react'
import { useDispatch } from './context/context';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export default function Card({id,name,imgSrc,option,des}) {
  const navigate = useNavigate();
   const sizes = option?.[0] || {};
   const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(Object.values(sizes)[0]);
const  dispatch  = useDispatch();
 const handleCart = () => {
  if (!localStorage.getItem("isLoggedIn")) {
    Swal.fire({
  icon: "warning",
  title: "OOPS...",
  text: "You need to login first!",
  confirmButtonText: "Go to Login"
});
    navigate("/login");
  } else {
    dispatch({
      type: "add_to_cart",
      payload: {
        id,
        name,
        imgSrc,
        option,
        des,
        qty,
        price,
        total: qty * price
      }
    });
  }
};
 
  return (
    <>
     
     <div className="card m-4" style={{ width: "100%" }} >
  <img src={imgSrc} class="card-img-top" alt="Opps No Img"   style={{ height: "400px", objectFit: "cover" }}/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <hr/>
    <p class="card-text">{des}</p>
    <div className='container h-100 w-100 row'>
      <div className="col">
        <select class="form-select" aria-label="Default select example"onChange={(e) => setQty(e.target.value)}>
          {Array.from(Array(6), (e,i)=>{
            return (
              <option key={i+1} value={i+1}>{i+1}</option>
            )
          })}
        </select>
        <button type='button' className='btn btn-danger mt-4' onClick={handleCart}><i class="fa-solid fa-cart-plus">  cart</i></button>
        
      </div>
      <div className="col">
           <select className="form-control" onChange={(e) => setPrice(e.target.value)}>
      {Object.entries(sizes).map(([type, price]) => (
        <option key={type} value={price}>
          {type} - ₹{price}
        </option>
      ))}
    </select>
    
      </div>
      <div className='col'>
         <button type='button' className='btn btn-secondary '>Total Price:-{qty*price}</button>
      </div>
   </div> 
   </div>
  </div>
    </>
  )
}
