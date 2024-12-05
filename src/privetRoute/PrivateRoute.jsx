import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider'; 

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext); 

    
    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
