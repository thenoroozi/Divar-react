import React from 'react';
import { useQuery } from '@tanstack/react-query';

import AddPost from 'components/templates/AddPost';
import PostList from 'components/templates/PostList';
import { getProfile } from 'services/user';

function DashboardPage() {
   const { data } = useQuery(["profile"], getProfile);

   return (
      <div>
         <div className='mb-4 pb-3 border-b-2 border-primary'>
         <h3 className='mb-5 border-b-2 border-primary w-fit pb-1 font-semibold'>مشخصات کاربری</h3>
            <ul className='flex flex-col flex-wrap items-center justify-evenly space-y-1 md:flex-row
         [&_li]:flex [&_li]:items-center [&_li]:mx-5 [&_h4]:font-semibold [&_h4]:ml-2'>
               <li>
                  <h4>نوع کاربر: </h4>
                  <p>{data.data.role === "USER" ? "کاربر عادی" : "ادمین"}</p>
               </li>
               <li>
                  <h4>شماره موبایل: </h4>
                  <p>{data.data.mobile}</p>
               </li>
               <li>
                  <h4>تاریخ ساخت اکانت: </h4>
                  <p>{new Date(data.data.createdAt).toLocaleDateString("fa-IR")}</p>
               </li>
            </ul>
         </div>
         <div className='flex flex-col items-center sm:flex-row sm:items-start'>
            <AddPost />
            <PostList />
         </div>
      </div>
   );
}

export default DashboardPage;