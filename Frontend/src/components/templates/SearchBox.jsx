import React from 'react';

const SearchBox = ({ search, setSearch }) => {

   const submitHandler = (event) => {
      event.preventDefault();
      console.log(search);
   }
   return (
      <form className='p-1.5 flex items-center justify-between w-96 mx-auto bg-white rounded-md shadow'
         onSubmit={submitHandler}>
         <input
            type="search"
            placeholder='جست و جو در همه آگهی‌ها...'
            value={search}
            onChange={e => setSearch(e.target.value)}
            className='w-full p-1 ml-1 border-none text-sm outline-none' />
         <button type='submit' className='p-1 rounded-md hover:bg-primary-Hover'>
            <img src="search-white.png" className='w-8' />
         </button>
      </form>
   );
};

export default SearchBox;