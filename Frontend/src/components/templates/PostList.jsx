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
            (data ? data.data.posts.map(post => (
               <div 
               className='flex items-center border border-zinc-400 rounded my-2 p-1 [&_div]:w-full [&_p]:text-sm [&_span]:text-sm [&_span]:text-center'
               key={post._id}>
                  <img src={`${baseURL}${post.images[0]}`} className='w-full h-16 rounded ml-8' />
                  <div>
                     <p>{post.options.title}</p>
                     <span>{post.options.content}</span>
                  </div>
                  <div>
                     <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                     <span className='w-36 text-center'>{sp(post.amount)} تومان</span>
                  </div>
               </div>)) :
               (<div>
                  آگهی‌ ثبت نکرده‌اید!
               </div>)
            )
         }
      </div>
   );
}

export default PostList;