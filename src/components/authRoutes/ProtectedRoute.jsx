import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
// import ResponsiveAppBar from '../ResponsiveAppBar';
import Products from '../Products';
import Navbar from '../Navbar';

const ProtectedRoute = () => {
    const auth = localStorage.getItem('token');
  return (
    <div>
        {
            auth ?
            <>
                <Navbar/>
                {/* <Products/> */}
                <Outlet/>
            </>
             :<Navigate to="/login"/>
        }
    </div>
  )
}

export default ProtectedRoute