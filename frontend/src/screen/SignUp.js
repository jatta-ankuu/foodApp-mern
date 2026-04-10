import React, { useState } from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';
export default function SignUp() {
let navigate = useNavigate();

  let [crendential , setcrendential] =useState({
    name:"",
    email:"",
    location:"",
    password:""
  });

  const onChanged = ((e)=>{
    let ab = e.target.name;
    let res = e.target.value;
    setcrendential((currdata)=>{
      return({...currdata ,[ab]:res});
    });
  });
  const handleSubmit = async (e) => {
  e.preventDefault();
  try{
  const response = await fetch("https://malik-food.onrender.com/routes/create",{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body: JSON.stringify(crendential)
  })
  if(response.ok){
    const data = await response.json();
    Swal.fire({
      icon:"success",
      title:"Signed-up",
      text:`${data.userData.name} is rejistered successfully`,
      confirmButtonText:"Go to Login"
    });
    navigate("/login");
  }else{
    const error = await response.json();
 if(error.errors){
    // validation error
    Swal.fire({
      icon:"error",
      title:"Oops😢...! ",
      text:`${error.errors[0].msg} `,
      confirmButtonText:"Done"
    });
  } else {
    // normal backend error
    Swal.fire({
      icon:"error",
      title:"Oops😢...!",
      text:`${error.message} `,
      confirmButtonText:"Done"
    });
  }
}
  

  }catch(e){
   alert('Something went wrong. Please try again'+e);
  }
}

  return (
    <div style={{backgroundColor:"pink" ,height:"100vh"}}>    
      <h2 style={{paddingTop:"20px",textAlign:"center"}}>Welcome to our <span style={{color:"rebeccapurple"}}>Malik Food</span> </h2>
    <div className='container-fluid cant p-5' style={{zIndex:10,backgroundColor:"white"}}>
      <div className='row'>
        <div className='col-md-6 needs-validation' noValidate>
          <h3 style={{marginBottom:"20px",textAlign:"center",color:"green"}}>Thanks for choosing our food</h3>
           <form method="post" onSubmit={handleSubmit}  >
        <div className="mb-3">
        <label 
        htmlFor="Username" >
      <b>Name</b>
    </label>
        <input name="name" id="Username" placeholder='Ankush Malik' required className="form-control" value={crendential.name} onChange={onChanged}/>
        <div className="invalid-feedback">Name must be enter</div>
        <div className="valid-feedback">Look's Good..!</div>
        </div>
         <div className="mb-3">
        <label 
        htmlFor="location" >
      <b>Location</b>
    </label>
        <input name="location" id="location" type="location" required className="form-control" value={crendential.location} onChange={onChanged} placeholder='Meerut ,India'/>
        <div className="invalid-feedback">Location must be enter</div>
        <div className="valid-feedback">Look's Good..!</div>
        </div>
        <div className="mb-3">
        <label htmlFor="email" > <b>Email</b></label>
        <input name="email"
        type="email"
         required className="form-control" value={crendential.email} onChange={onChanged} placeholder='Malik123@gmail.com'/>
         <div className="invalid-feedback">Email must be enter</div>
        <div className="valid-feedback">Look's Good..!</div>
        </div>
        <div className="mb-3">
        <label htmlFor="pass" > <b>Password</b></label>
        <input name="password" required type="password" id="pass" className="form-control" value={crendential.password} onChange={onChanged} placeholder='Malik@123abc'/>
        <div id="passwordHelpBlock" className="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
        <div className="invalid-feedback">password must be enter</div>
        <div className="valid-feedback">Look's Good..!</div>
        </div>
            <button className="btn btn-success" type='submit' >Sign Up</button> &nbsp;&nbsp; &nbsp;&nbsp;
           <Link to="/login" className="btn btn-danger">
  Already Registered
</Link>

        </form>
        </div>
        <div className='col-md-6'>
           <img
                src={`https://loremflickr.com/800/800/burger?random=${Date.now()}`}
                alt="Food"
                className="signupimg "
              />
        </div>
      </div>
    </div>
    </div>
  )
}
