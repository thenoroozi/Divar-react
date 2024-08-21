
const searchPosts = (posts, search) => {
   if (!search) return posts?.data.posts;
   const searchedPosts = posts?.data.posts.filter(post =>
      post.options.title.includes(search)
   );
   return searchedPosts;
}


const filterPosts = (posts, categories, category) => {
   if (!category) return posts;

   const categoryID = categories?.data.find(i => i.name === category);
   const filteredPosts = posts?.filter(post =>
      post.category === categoryID?._id);

   return filteredPosts;
}

const createQueryObject = (currentQuery, newQuery) => {
   if (newQuery.categoryName === "همه‌ی آگهی‌ها") {
      const { categoryName, ...rest } = currentQuery;
      return rest;
   }
   if (newQuery.search === "") {
      const { search, ...rest } = currentQuery;
      return rest;
   }
   return { ...currentQuery, ...newQuery };
}

const getInitialQuary = (searchParams) => {
   const query = {};
   const categoryName = searchParams.get("categoryName")
   const search = searchParams.get("search")
   if (categoryName) query.categoryName = categoryName;
   if (search) query.search = search;
   return query;
}

export {
   searchPosts,
   filterPosts,
   createQueryObject,
   getInitialQuary,
};