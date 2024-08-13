import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addCategory } from 'services/admin';

function CategoryForm() {
   const queryClient = useQueryClient();
   const [form, setForm] = useState({ name: "", slug: "", icon: "" })

   const { mutate, isLoading, error, data } = useMutation(addCategory, {
      onSuccess: () => queryClient.invalidateQueries("get-categories"),
   });

   const changeHandler = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
   }

   const submitHandler = (event) => {
      event.preventDefault();
      if (!form.name || !form.slug || !form.icon) return;

      mutate(form);
   }
   return (
      <form
         onChange={changeHandler}
         onSubmit={submitHandler}
         className='[&_label]:block [&_label]:text-sm [&_label]:mb-1 
         [&_input]:block [&_input]:w-72 [&_input]:p-1 [&_input]:rounded [&_input]:mb-5
         [&_p]:w-72 [&_p]:mb-4 [&_p]:text-white [&_p]:p-1 [&_p]:text-center [&_p]:rounded'>

         <h3 className='mb-8 border-b-2 border-primary w-fit pb-1 font-semibold'>دسته بندی جدید</h3>

         {!!error && <p className='bg-primary'>مشکلی پیش آمده است، لطفا دوباره امتحان کنید!</p>}
         {data?.status === 201 && <p className='bg-lime-700'>دسته بندی با موفقیت اضافه شد</p>}

         <label htmlFor="name">اسم دسته بندی</label>
         <input type="text" name='name' id='name' />
         <label htmlFor="slug">اسلاگ</label>
         <input type="text" name='slug' id='slug' />
         <label htmlFor="icon">آیکون</label>
         <input type="text" name='icon' id='icon' />
         <button
            className='py-2 px-6 text-sm hover:bg-primary-Hover disabled:opacity-[0.8]'
            type='submit'
            disabled={isLoading}>ایجاد</button>
      </form>
   );
}

export default CategoryForm;