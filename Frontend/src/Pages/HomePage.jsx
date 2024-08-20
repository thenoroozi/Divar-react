import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Main from 'components/templates/Main';
import SideBar from 'components/templates/SideBar';
import Loader from 'components/modules/Loader';

import { getAllPost } from 'services/user';
import { getCategory } from 'services/admin';
import SearchBox from 'components/templates/SearchBox';

function HomePage() {
   const { refetch: refetchPosts, data: posts, isLoading: postLoading } = useQuery({
      queryKey: ["my-post-list"],
      queryFn: getAllPost
   });
   const { data: categories, isLoading: categoryLoading } = useQuery({
      queryKey: ["get-categories"],
      queryFn: getCategory
   });
   const [search, setSearch] = useState("")

   useEffect(() => {
      refetchPosts()
   }, [])

   return (
      <>
         <SearchBox search={search} setSearch={setSearch} />
         {postLoading || categoryLoading ? <Loader /> :
            <div className='flex flex-col items-center sm:flex-row sm:items-start'>
               <SideBar categories={categories} />
               <Main posts={posts} />
            </div>}
      </>
   );
}

export default HomePage;