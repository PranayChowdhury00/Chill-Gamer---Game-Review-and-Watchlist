import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/'); 
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col text-center">
        <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">Oops! The page you're looking for doesn't exist.</p>
        <button onClick={goToHome} className="btn btn-primary mt-6">Go to Home</button>
      </div>
    </div>
  );
};

export default NotFound;
