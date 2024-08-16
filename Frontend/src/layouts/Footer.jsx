import React from 'react';

function Footer() {
   return (
      <footer className='text-white mt-5'>
         <div className='bg-gray-800 flex justify-evenly items-center py-3 px-0'>
            <div className='w-40 sm:w-48 text-justify text-sm sm:text-base'>
               این سایت توسط حامد نوروزی جهت نمونه کار توسعه داده شده و واقعی نمی‌باشد.
            </div>
            <div className='text-sm'>
               <p className='mb-1 font-semibold'>ارتباط با ما</p>
               <ul className='space-y-1 [&_li]:transition-all [&_li]:flex [&_li]:items-center hover:[&_li]:text-red-500 [&_li_img]:w-6 [&_li_img]:ml-1'>
                  <li>
                     <img src="github.png" />
                     <a href="https://github.com/thenoroozi">Thenoroozi</a>
                  </li>
                  <li>
                     <img src="instagram.png" />
                     <a href="https://instagram.com/noroozidev">Noroozidev</a>
                  </li>
                  <li>
                     <img src="linkedin.png" />
                     <a href="https://www.linkedin.com/in/hamed-noroozi-570465208">Hamed Noroozi</a>
                  </li>
               </ul>
            </div>
         </div>
         <div className='bg-gray-950 text-center py-3'>&copy; تمامی حقوق این سایت محفوظ است</div>
      </footer>
   );
}

export default Footer;