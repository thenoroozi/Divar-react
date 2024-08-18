import React from 'react';
import AddPost from 'components/templates/AddPost';
import PostList from 'components/templates/PostList';

function DashboardPage(props) {
   return (
      <div className='flex flex-col items-center sm:flex-row sm:items-start'>
        <AddPost />
        <PostList />
      </div>
   );
}

export default DashboardPage;