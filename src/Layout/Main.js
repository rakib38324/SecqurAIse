import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
  const navigate = useNavigate();
    return (
        <div>
        {/* <Navbar></Navbar> */}
  
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* <!-- Page content here --> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
  
  
  
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 text-white bg-gray-900">
              {/* <!-- Sidebar content here --> */}
  
              <label className='pb-3 cursor-pointer' onClick={() => navigate('/')} htmlFor="my-drawer">
                    Home
  
                  </label>
                  
  
              
  
            </ul>
  
          </div>
        </div>
      </div>
    );
};

export default Main;