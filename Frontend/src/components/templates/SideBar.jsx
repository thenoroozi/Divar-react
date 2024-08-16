import React from 'react';

const SideBar = ({categories}) => {

   return (
      <div className='mt-3 w-full sm:w-72 sm:ml-3 bg-white p-5 rounded-md shadow-sm'>
         <h4 className='mb-8 border-b-2 border-primary w-fit pb-1 font-semibold'>دسته بندی‌ها</h4>
         <ul>
            {categories?.data.map((category)=>(
               <li key={category._id} className='flex my-2 mx-0 px-1 py-2 cursor-pointer rounded-md transition-all [&_p]:hover:text-primary-Hover hover:bg-red-100 '>
                  <img src={`${category.icon}.svg`}/>
                  <p className='font-extralight mr-2 text-gray-600'>{category.name}</p>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default SideBar;