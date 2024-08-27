import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

import Loader from 'components/modules/Loader';
import { deletePost, getPost } from 'services/user';
import { sp } from 'utils/numbers';
import { Link } from 'react-router-dom';

function PostList() {
   const baseURL = import.meta.env.VITE_BASE_URL;
   const { refetch, data, isLoading } = useQuery({
      queryKey: ["my-post-list"],
      queryFn: getPost
   });


   useEffect(() => {
      const fetch=setInterval(() => {
         refetch()
      }, 3000);
      setTimeout(() => {
         clearInterval(fetch)
      }, 4000);

   }, [data])

   return (
      <div>
         <h3 className='my-8 border-b-2 border-primary w-fit pb-1 font-semibold sm:my-0 sm:mb-8'>آگهی‌های من</h3>
         {isLoading ? <Loader text={false} /> :
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 md:gap-3 xl:grid-cols-3'>
               {data ? data.data.posts.map(post => (
                  <div
                     className='min-w-72 h-32 bg-white flex items-center shadow-md rounded-md my-2 mx-auto p-1.5 overflow-auto no-scrollbar [&_p]:text-xs'
                     key={post._id}>
                     <img src={`${baseURL}${post.images[0]}`} className='w-32 h-full rounded ml-3' />
                     <div className='w-40 h-full flex flex-col justify-between'>
                        <h4 className='font-semibold line-clamp-1'>
                           <Link to={`/post/${post._id}`}>{post.options.title}</Link>
                        </h4>
                        <p className='text-justify pl-4 line-clamp-2'>{post.options.content}</p>
                        <div className='w-full flex items-center justify-between'>
                           <div className='text-xs text-gray-500'>
                              <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                              <span className='w-36 text-center'>{sp(post.amount)} تومان</span>
                           </div>
                           <button
                              onClick={() => deletePost(post._id)}
                              className='px-1.5 py-0.5 hover:bg-primary-Hover focus:opacity-[0.8]'>حذف</button>
                        </div>
                     </div>
                  </div>)) :
                  (<div className='text-lg text-center bg-slate-300 w-96 py-6 rounded-md mx-auto'>
                     آگهی‌ ثبت نکرده‌اید!
                  </div>)
               }
            </div>
         }
      </div>
   );
}

export default PostList;