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
      <form onSubmit={submitHandler} onChange={changeHandler}>
         <h3>افزودن آگهی</h3>
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
         <button type='submit'>ایجاد</button>
      </form>
   );
};

export default AddPost;