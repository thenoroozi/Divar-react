import React from 'react';
import { useQuery } from '@tanstack/react-query';

import Main from 'components/templates/Main';
import SideBar from 'components/templates/SideBar';
import Loader from 'components/modules/Loader';

import { getAllPost } from 'services/user';
import { getCategory } from 'services/admin';

function HomePage() {
   const { data: posts, isLoading: postLoading } = useQuery(["my-post-list"], getAllPost);
   const { data: categories, isLoading: categoryLoading } = useQuery(["get-categories"], getCategory);

   return (
      <>
         {postLoading || categoryLoading ? <Loader /> :
            <div className='flex flex-col items-center sm:flex-row sm:items-start'>
               <SideBar categories={categories} />
               <Main posts={posts} />
            </div>}
      </>
   );
}

export default HomePage;