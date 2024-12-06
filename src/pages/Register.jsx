import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createNewUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");  

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;  

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/;
        if (!passwordPattern.test(password)) {
            setError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            toast.error("Password does not meet the criteria!");
            return;
        }

        setError("");  

        createNewUser(email, password)
            .then(result => {
               
                
                result.user.updateProfile({
                    displayName: name,
                    photoURL: photoURL
                }).then(() => {
                    e.target.reset();
                    toast.success("Registration Successful!");
                    navigate('/');  
                }).catch((error) => {
                    toast.error(error.message);
                });
            })
            .catch(error => {
                console.error(error.message);
                toast.error(error.message);  
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            {error && <p className="text-red-500">{error}</p>}  
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className='mt-2'>Already Registered? <Link className='btn mr-1' to="/login">LogIn</Link> Now</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
