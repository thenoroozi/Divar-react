import React, { useState } from 'react';

function CategoryForm() {
   const [form, setForm] = useState({ name: "", slug: "", icon: "" })

   const changeHandler = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value })
   }
   const submitHandler = (event) => {
      event.preventDefault();
      console.log(form);
   }
   return (
      <form
         onChange={changeHandler}
         onSubmit={submitHandler}
         className='[&_label]:block [&_label]:text-sm [&_label]:mb-1 
         [&_input]:block [&_input]:w-72 [&_input]:p-1 [&_input]:rounded [&_input]:mb-5'>
         <h3 className='mb-8 border-b-2 border-primary w-fit pb-1'>دسته بندی جدید</h3>
         <label htmlFor="name">اسم دسته بندی</label>
         <input type="text" name='name' id='name' />
         <label htmlFor="slug">اسلاگ</label>
         <input type="text" name='slug' id='slug' />
         <label htmlFor="icon">آیکون</label>
         <input type="text" icon='icon' id='icon' />
         <p className='hidden w-72 bg-primary mb-4 text-white p-1 text-center rounded'></p>
         <button
            className='py-2 px-6 text-sm hover:bg-primary-Hover'
            type='submit'>ایجاد</button>
      </form>
   );
}

export default CategoryForm;