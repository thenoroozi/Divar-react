import React from 'react';

function Footer() {
   return (
      <footer className='flex justify-evenly items-center border-t-2 py-2 px-0 mt-5'>
         <div className='w-40 sm:w-48 text-justify text-sm sm:text-base'>
          این سایت توسط حامد نوروزی جهت نمونه کار توسعه داده شده و واقعی نمی‌باشد.
         </div>
         <div className='text-sm'>
            <p className='mb-1 font-semibold'>ارتباط با ما</p>
            <ul className='space-y-1 [&_li]:flex [&_li]:items-center [&_li_img]:w-7 [&_li_img]:ml-1'>
               <li>
                  <img src="github.png"/>
                  <a href="https://github.com/thenoroozi">Thenoroozi</a>
               </li>
               <li>
                  <img src="instagram.png"/>
                  <a href="https://instagram.com/noroozidev">Noroozidev</a>
               </li>
               <li>
                  <img src="linkedin.png"/>
                  <a href="https://www.linkedin.com/in/hamed-noroozi-570465208">Hamed Noroozi</a>
               </li>
            </ul>
         </div>
      </footer>
   );
}

export default Footer;