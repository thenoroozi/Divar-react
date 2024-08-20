import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import Loader from 'components/modules/Loader';
import { getPostDetails } from 'services/user';
import { sp } from 'utils/numbers';

const PostDetails = () => {
   const { id } = useParams();
   const { data, isLoading, error } = useQuery({
      queryKey: ["post-details", id],
      queryFn: getPostDetails
   })
   const baseURL = import.meta.env.VITE_BASE_URL;

   const post = data && data.data.post;

   if (error) return toast.error("مشکلی پیش آمده است!");



   return (
      <>
         {isLoading ? <Loader /> :
            (<div className='w-full xl:w-[1100px] bg-white mt-8 mx-auto p-4 flex flex-col md:flex-row-reverse rounded-lg shadow-md'>
               <img className='w-96 h-72 sm:h-80 rounded-lg'
                  src={`${baseURL}${post.images[0]}`}
                  onError={(e) => e.target.src = '/no-image.jpg'} />
               <div className='w-full mt-4 flex flex-col items-start md:mt-0 md:ml-5 
               [&_div]:flex [&_div]:items-center [&_div]:mb-3 [&_img]:w-6 [&_img]:ml-1.5'>
                  <h3 className='font-semibold text-lg'>{post.options.title}</h3>
                  <div>
                     <img src="/location.svg" />
                     <span className='text-sm text-gray-500'>ایجاد شده در {post.options.city}</span>
                  </div>
                  <div className='mt-5'>
                     <img src="/date.png" />
                     <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                  </div>
                  <div>
                     <img src="/price.png"/>
                     <span className=' text-start'>{sp(post.amount)} تومان</span>
                  </div>
                  <div>
                     <span className='font-semibold ml-2'>دسته بندی: </span>
                     <span>{post.category}</span>
                  </div>
                  <div>
                     <img src="/phone.png" />
                     <span className='text-sm'>جهت تماس با شماره <span className='font-semibold'>«{post.userMobile}»</span> حاصل فرمایید</span>
                  </div>
                  <div>
                     <span className='font-semibold ml-2'>توضیحات:</span>
                     <p className='text-justify'>{post.options.content || "---"}</p>
                  </div>
               </div>
            </div>)}
      </>
   );
}; 

export default PostDetails;