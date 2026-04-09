import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Page reload ko rokein

        try {
            const response = await fetch('https://foodapp-mern-f395.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                // Agar login successful hai, to user ko dashboard par bhejein
                localStorage.setItem("isLoggedIn", data.authToken);
                Swal.fire({
                    icon:"success",
                    title:`Welcome ${data.user.name}`,
                    text:"Successfull Logged IN",
                    confirmButtonText:"Go to Home"
                });
               navigate("/");
            } else {
                const errorData = await response.json();
                alert(`Login failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Something went wrong. Please try again.'+error);
        }
    };

    return (
        <>
            <h1 className="offset-2 mt-5 h-100">Log in</h1>
            <div className="row">
                <div className="col-6 needs-validation offset-2" noValidate>
                    <form onSubmit={handleSubmit}> 
                        <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <input
                                name="username"
                                id="username"
                                required
                                className="form-control"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <small style={{color:"red"}}>PLease use your given Name as Username</small>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass">Password</label>
                            <input
                                name="password"
                                type="password"
                                id="pass"
                                required
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-success fs-5 mt-3">Log in</button> &nbsp;&nbsp; &nbsp;&nbsp;
                        <Link to="/signup" className="btn btn-danger fs-5 mt-3">
  Rejister User
</Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;