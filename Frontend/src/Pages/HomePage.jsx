import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import Main from 'components/templates/Main';
import SideBar from 'components/templates/SideBar';
import Loader from 'components/modules/Loader';
import SearchBox from 'components/templates/SearchBox';

import { getAllPost } from 'services/user';
import { getCategory } from 'services/admin';
import { filterPosts, getInitialQuary, searchPosts } from 'utils/search';

function HomePage() {
   const { refetch: refetchPosts, data: posts, isLoading: postLoading } = useQuery({
      queryKey: ["my-post-list"],
      queryFn: getAllPost
   });
   const { data: categories, isLoading: categoryLoading } = useQuery({
      queryKey: ["get-categories"],
      queryFn: getCategory
   });
   const [displayed, setDisplayed] = useState([])
   const [search, setSearch] = useState("")
   const [query, setQuery] = useState({})

   const [searchParams, setSearchParams] = useSearchParams();

   useEffect(() => {
      refetchPosts()
      setDisplayed(posts)
      
      setQuery(getInitialQuary(searchParams))
   }, [])
   
   useEffect(() => {
      setSearchParams(query);
      setSearch(query.search || "")
      
      console.log(query);
      console.log(posts);
      let finalPosts = searchPosts(posts, query.search)
      finalPosts = filterPosts(finalPosts, categories, query.categoryName);
      setDisplayed(finalPosts)
   }, [query,posts])

   return (
      <>
         <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} query={query} />
         {postLoading || categoryLoading ? <Loader /> :
            <div className='flex flex-col items-center sm:flex-row sm:items-start'>
               <SideBar categories={categories} setQuery={setQuery} query={query} />
               <Main posts={displayed || posts?.data.posts} />
            </div>}
      </>
   );
}

export default HomePage;