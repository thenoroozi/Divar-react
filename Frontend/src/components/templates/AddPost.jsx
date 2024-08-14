import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getCategory } from 'services/admin';

const AddPost = () => {
   const { data } = useQuery(["get-categories"], getCategory);
   const [form, setForm] = useState({
      title: "",
      content: "",
      category: "",
      city: "",
      amount: null,
      images: null,
   });

   const changeHandler = (event) => {
      const name = event.target.name;
      if (name !== "images") {
         setForm({ ...form, [name]: event.target.value });
      } else {
         setForm({ ...form, [name]: event.target.files[0] })
      }
   }

   const submitHandler = (event) => {
      event.preventDefault();
      console.log(form);

   }
   return (
      <form
         onSubmit={submitHandler}
         onChange={changeHandler}
         className='[&_label]:block [&_label]:text-sm [&_label]:mb-2
            [&_input]:block [&_input]:w-72 [&_input]:p-1 [&_input]:mb-5
            [&_textarea]:block [&_textarea]:w-72 [&_textarea]:h-24 [&_textarea]:mb-5 [&_textarea]:border [&_textarea]:border-zinc-400 [&_textarea]:rounded [&_textarea]:p-1
            [&_select]:w-72 [&_select]:block [&_select]:bg-white [&_select]:border [&_select]:border-zinc-400 [&_select]:rounded [&_select]:mb-5 [&_select]:p-1'>

         <h3 className='mb-8 border-b-2 border-primary w-fit pb-1 font-semibold'>افزودن آگهی</h3>
         <label htmlFor="title">عنوان</label>
         <input type="text" name="title" id="title" />
         <label htmlFor="content">توضیحات</label>
         <textarea name="content" id="content" />
         <label htmlFor="amount">قیمت</label>
         <input type="number" name="amount" id="amount" />
         <label htmlFor="city">شهر</label>
         <input type="text" name="city" id="city" />
         <label htmlFor="category">دسته بندی</label>
         <select name="category" id="category">
            {data?.data.map((i) => (
               <option key={i._id} value={i._id}>
                  {i.name}
               </option>
            ))}
         </select>
         <label htmlFor="images">عکس</label>
         <input type="file" name="images" id="images" />
         <button
            className='px-6 py-1.5 transition-all hover:bg-primary-Hover'
            type='submit'>ایجاد</button>
      </form>
   );
};

export default AddPost;