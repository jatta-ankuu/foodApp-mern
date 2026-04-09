import React from 'react'
import { useCart } from './context/context';
import Swal from 'sweetalert2';
import { Link,useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    Swal.fire({
      icon:"question",
      title:"sign-out",
      text:"Do you want to sign-out",
      showCancelButton: true,
      cancelButtonText:"No",
      confirmButtonText:"Yes, Sign-Out"
    }).then((result)=>{
      if(result.isConfirmed){
         localStorage.removeItem("isLoggedIn");
         Swal.fire({
          icon:"success",
          title:"SIGN-OUT",
          text:"Sign-out successfully",
          confirmButtonText:"Done"
         });
    navigate("/");
      }else{
        return;
      }
    });
  }
   const state = useCart();
  return (
    <div>
    <nav className="navbar border-bottom py-4 navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid ">
   <Link className="navbar-brand fs-1 " to="#">My Food</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item  ">
          <Link className="nav-link active fs-5 " aria-current="page" to="/">Home</Link>
        </li>
        {
          (localStorage.getItem("isLoggedIn"))?
           <li className="nav-item  ">
          <Link className="nav-link active fs-5 " aria-current="page" to="/">My Order</Link>
        </li>
        :""
        }
      </ul>
      {!(localStorage.getItem("isLoggedIn"))?
      <div className='d-flex'>
          <Link className="btn bg-white text-success mx-1 fs-5" to="/login">login</Link>
          <Link className="btn bg-white text-success mx-1 fs-5" to="/signup">sign-up</Link>
      </div>
      : <div className='d-flex'>
        <Link className="btn bg-white text-success mx-1 fs-5" to="/cart">My cart :{state.length}</Link>
        <button className='btn btn-danger text-white fs-5 mx-1'onClick={handleLogout}>Logout</button>
      </div>
      }
    </div>
  </div>
</nav>
</div>
  )
}
