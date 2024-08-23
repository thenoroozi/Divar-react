import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getProfile } from 'services/user';
import { deleteCookie } from 'utils/cookie';

function Header() {
   const navigate = useNavigate();
   const { refetch, data } = useQuery({
      queryKey: ["profile"],
      queryFn: getProfile
   });
   const [open, setOpen] = useState(false);
   const role = data && data.data.role;

   const logoutHandler = () => {
      deleteCookie();
      navigate("/");
      refetch();
   }

   return (
      <header className='bg-white flex justify-between items-center border-b-2 py-2 px-3 mb-5 sm:px-5
   [&_div]:flex [&_div]:items-center 
   [&_span]:flex [&_span]:items-center [&_span]:text-gray-500 [&_span]:h-12
   [&_span_p]:mr-1 [&_span_p]:text-sm'>
         <div className='space-x-2'>
            <Link to="/">
               <img src="divar.svg" className='w-11 ml-5 sm:ml-10' />
            </Link>
            <Link to="/" className='flex items-center text-gray-500 ml-1 [&>p]:mr-1 [&_p]:text-sm'>
               <img src="home.svg" />
               <p>خانه</p>
            </Link>
            <span>
               <img src="location.svg" />
               <p>اصفهان</p>
            </span>
         </div>
         <div>
            <span className='cursor-pointer' onClick={() => setOpen(!open)}>
               <img src="profile.svg" />
               <p>دیوار من</p>
            </span>
            <ul className={`${open ? "absolute" : "hidden"} left-12 top-14 w-40 h-fit bg-white p-2.5 rounded-lg shadow-md [&_img]:w-6`}>
               <Link to="/admin" className={`${role === "ADMIN" ? "flex" : "hidden"} items-center mb-2 p-1 rounded hover:bg-gray-200`}>
                  <img src="admin.png" />
                  <li>مدیریت ادمین</li>
               </Link>
               <Link to="/auth" className='flex items-center mb-2 p-1 rounded hover:bg-gray-200'>
                  <img src="dashboard.png" />
                  <li>داشبورد</li>
               </Link>
               {data ?
                  <li onClick={logoutHandler} className='flex items-center p-1 rounded cursor-pointer hover:bg-gray-200'>
                     <img src="logout.png" />
                     <p>خروج</p>
                  </li> :
                  <Link to="/auth" className='flex items-center mb-2 p-1 rounded hover:bg-gray-200'>
                     <img src="enter.png" />
                     <p>ورود</p>
                  </Link>
               }
            </ul>
            <Link
               to="/dashboard"
               className='bg-primary text-white h-9 w-16 text-sm leading-9 text-center rounded mr-2
               sm:mr-8 transition-all hover:bg-primary-Hover sm:h-10 sm:w-20 sm:text-base sm:leading-10'>
               ثبت آگهی
            </Link>
         </div>
      </header>
   );
}

export default Header;