import React from 'react';
import AddPost from 'components/templates/AddPost';
import PostList from 'components/templates/PostList';

function DashboardPage(props) {
   return (
      <div>
        <AddPost />
        <PostList />
      </div>
   );
}

export default DashboardPage;