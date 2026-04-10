import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function SignUp() {

  const navigate = useNavigate();

  const [crendential, setcrendential] = useState({
    name: "",
    email: "",
    location: "",
    password: ""
  });

  const onChanged = (e) => {
    const { name, value } = e.target;
    setcrendential((curr) => ({
      ...curr,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://malik-food.onrender.com/routes/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(crendential)
      });

      if (response.ok) {
        const data = await response.json();
        Swal.fire({
          icon: "success",
          title: "Signed-up",
          text: `${data.userData.name} is registered successfully`,
        });
        navigate("/login");

      } else {
        const error = await response.json();

        Swal.fire({
          icon: "error",
          title: "Oops 😢",
          text: error.errors ? error.errors[0].msg : error.message
        });
      }

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${err}`
      });
    }
  };

  return (
    <div className="container-fluid py-4" style={{ backgroundColor: "pink", minHeight: "100vh" }}>

      <h2 className="text-center mb-4">
        Welcome to our <span style={{ color: "rebeccapurple" }}>Malik Food</span>
      </h2>

      <div className='container bg-white shadow p-3 p-md-5 rounded'>

        <div className='row align-items-center'>

          {/* FORM */}
          <div className='col-12 col-md-6'>
            <h4 className="text-center text-success mb-3">
              Thanks for choosing our food
            </h4>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label><b>Name</b></label>
                <input
                  name="name"
                  required
                  className="form-control"
                  value={crendential.name}
                  onChange={onChanged}
                  placeholder='Abhi '
                />
              </div>

              <div className="mb-3">
                <label><b>Location</b></label>
                <input
                  name="location"
                  required
                  className="form-control"
                  value={crendential.location}
                  onChange={onChanged}
                  placeholder='Meerut, India'
                />
              </div>

              <div className="mb-3">
                <label><b>Email</b></label>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control"
                  value={crendential.email}
                  onChange={onChanged}
                  placeholder='Malik123@gmail.com'
                />
              </div>

              <div className="mb-3">
                <label><b>Password</b></label>
                <input
                  type="password"
                  name="password"
                  required
                  className="form-control"
                  value={crendential.password}
                  onChange={onChanged}
                  placeholder='Malik@123abc'
                />
              </div>

              <button className="btn btn-success w-100 mb-2" type='submit'>
                Sign Up
              </button>

              <Link to="/login" className="btn btn-danger w-100">
                Already Registered
              </Link>

            </form>
          </div>

          {/* IMAGE */}
          <div className='col-12 col-md-6 mt-4 mt-md-0'>
            <img
              src={`https://loremflickr.com/800/600/burger?random=${Date.now()}`}
              alt="Food"
              className="img-fluid rounded"
            />
          </div>

        </div>
      </div>
    </div>
  )
}