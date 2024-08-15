import { useQuery } from '@tanstack/react-query';
import React from 'react';

import Loader from 'components/modules/Loader';
import { getPost } from 'services/user';

function PostList() {
   const baseURL = import.meta.env.VITE_BASE_URL;
   const { data, isLoading } = useQuery(["my-post-list"], getPost);
   console.log(data?.data.posts);

   return (
      <div>
         <h3 className='my-8 border-b-2 border-primary w-fit pb-1 font-semibold'>آگهی‌های من</h3>
         {isLoading ? <Loader /> :
            (data ? data.data.posts.map(post => (
               <div key={post._id}>
                  <img src={`${baseURL}${post.images[0]}`} />
                  <div>
                     <p>{post.options.title}</p>
                     <span>{post.options.content}</span>
                  </div>
                  <div>
                     <p>{post.createdAt}</p>
                     <span>{post.amount} تومان</span>
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