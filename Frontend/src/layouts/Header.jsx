import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
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
            <Link to="/auth">
               <span>
                  <img src="profile.svg" />
                  <p>دیوار من</p>
               </span>
            </Link>
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