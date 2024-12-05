import React, { useContext, useState } from 'react';  
import { AuthContext } from '../AuthProvider/AuthProvider';  
import { Link, useNavigate } from 'react-router-dom';  
import { toast } from 'react-toastify';  
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);  
  const navigate = useNavigate();
  const [error, setError] = useState('');  
  const [loading, setLoading] = useState(false);  

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);  
    setError('');

    signInUser(email, password)
      .then((result) => {
        console.log(result.user); 
        setLoading(false);  
        toast.success('Login successful!');  
        navigate('/');  
      })
      .catch((error) => {
        setLoading(false);  
        setError(error.message);  
        toast.error('Login failed! Please check your credentials.'); 
      });
  };

  const handelGoogleBtn = () => {
    setLoading(true);  
    setError('');      

    signInWithGoogle()
      .then((result) => {
        console.log(result.user); 
        setLoading(false);        
        toast.success('Login successful!'); 
        navigate('/');           
      })
      .catch((error) => {
        console.error(error);     
        setLoading(false);       
        setError(error.message);  
        toast.error('Google login failed!'); 
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
           
            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="form-control mt-6">
              <button className="btn btn-primary" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'} 
              </button>
            </div>
            <p className="mt-2 text-center">
              Don't have an account?{' '}
              <Link to="/register" className="btn btn-link">
                Register
              </Link>{' '}
              now
            </p>
          </form>

          <button  
            onClick={handelGoogleBtn} 
            disabled={loading} 
            className="bg-gray-400 font-medium hover:transition-transform flex items-center justify-center rounded-lg text-gray-200 py-2 mb-3 "
          >
            {loading ? (
              'Logging in...'
            ) : (
              <>
                <FaGoogle className="text-green-600 mr-4 text-2xl font-extrabold" />
                Login with Google
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
