import React from 'react';
import { Link } from 'react-router-dom';

import { sp } from 'utils/numbers';

const Main = ({ posts }) => {
   const baseURL = import.meta.env.VITE_BASE_URL;

   return (
      <div className='mt-5 mb-5 p-5 w-full bg-white grid grid-cols-1 gap-2 rounded-md shadow
      sm:mt-3 lg:grid-cols-2 xl:grid-cols-3'>
         {posts?.data.posts.map((post) => (
            <div
               className='min-w-72 h-32 flex items-center border border-zinc-400 rounded my-2 mx-auto p-1.5 overflow-auto no-scrollbar [&_p]:text-xs'
               key={post._id}>
               <div className='w-40 h-full flex flex-col justify-between'>
                  <h4 className='font-semibold line-clamp-1'>
                     <Link to={`/post/${post._id}`}>{post.options.title}</Link>
                  </h4>
                  <div className='w-full flex-col items-center justify-between text-gray-500 sm:flex-row'>
                     <p>{post.options.city}</p>
                     <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                  </div>
                  <span className='text-xs text-start'>{sp(post.amount)} تومان</span>
               </div>
               <img src={`${baseURL}${post.images[0]}`} onError={(e) => e.target.src = 'no-image.jpg'} className='w-32 h-full rounded mr-2' />
            </div>
         ))}
      </div>
   );
};

export default Main;