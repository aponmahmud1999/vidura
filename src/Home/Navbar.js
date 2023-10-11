import React from 'react';


const Navbar = () => {
    return (
        <div className="navbar bg-[#FF9933] text-white ">
        <div className="navbar-start">
          <div className="dropdown">
        
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
             Home
            </li>
            <li >
              Services
            </li>
            <li>
              Expertise
            </li>
            <li>
          
             Contact Us
            </li>
            </ul>
          </div>
       {/* <img className="h-[55px] ml-[45%] md:ml-10" src={img1}/> */}
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-4 gap-x-5">
            <li>
             Home
            </li>
            <li >
              Services
            </li>
            <li>
              Expertise
            </li>
            <li>
          
             Contact Us
            </li>
           
            
          </ul>
        </div>
      </div>
    );
};

export default Navbar;