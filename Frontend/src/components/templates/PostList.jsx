import { useQuery } from '@tanstack/react-query';
import React from 'react';

import Loader from 'components/modules/Loader';
import { getPost } from 'services/user';
import { sp } from 'utils/numbers';

function PostList() {
   const baseURL = import.meta.env.VITE_BASE_URL;
   const { data, isLoading } = useQuery(["my-post-list"], getPost);

   return (
      <div>
         <h3 className='my-8 border-b-2 border-primary w-fit pb-1 font-semibold'>آگهی‌های من</h3>
         {isLoading ? <Loader /> :
            <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3'>
               {data ? data.data.posts.map(post => (
                  <div
                     className='min-w-full h-32 flex items-center border border-zinc-400 rounded my-2 mx-auto p-1.5 [&_p]:text-xs'
                     key={post._id}>
                     <img src={`${baseURL}${post.images[0]}`} className='w-32 h-full rounded ml-3' />
                     <div className='w-full h-full flex flex-col justify-between'>
                        <h4 className='font-semibold line-clamp-1'>{post.options.title}</h4>
                        <p className='text-justify pl-4 line-clamp-2'>{post.options.content}</p>
                        <div className='w-full flex items-center justify-between'>
                           <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                           <span className='w-36 text-sm text-center'>{sp(post.amount)} تومان</span>
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