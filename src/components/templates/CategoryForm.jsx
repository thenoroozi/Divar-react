import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addCategory } from 'services/admin';

function CategoryForm() {
   const queryClient = useQueryClient();
   const [showMessage, setShowMessage] = useState(false);
   const [form, setForm] = useState({ name: "", slug: "", icon: "" })

   const { mutate, isLoading, error, data } = useMutation({
      mutationFn: addCategory,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: "get-categories" }),
   });

   const changeHandler = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
   }

   const submitHandler = (event) => {
      event.preventDefault();
      if (!form.name || !form.slug || !form.icon) return;

      mutate(form);

      for (let i = 0; i < 3; i++) {
         event.target[i].value = "";
      }
      setShowMessage(true);
   }

   useEffect(() => {
      setTimeout(() => {
         setShowMessage(false);
      }, 3000);
   }, [showMessage]);

   return (
      <form
         onChange={changeHandler}
         onSubmit={submitHandler}
         className='flex flex-col items-start [&_label]:w-72 [&_label]:text-sm [&_label]:mb-1 
         [&_input]:w-72 [&_input]:p-1 [&_input]:rounded [&_input]:mb-5
         [&_p]:w-72 [&_p]:mb-4 [&_p]:text-white [&_p]:p-1 [&_p]:text-center [&_p]:rounded'>

         <h3 className='mb-8 border-b-2 border-primary w-fit pb-1 font-semibold'>دسته بندی جدید</h3>

         {!!error && showMessage && <p className='bg-primary'>مشکلی پیش آمده است، لطفا دوباره امتحان کنید!</p>}
         {data?.status === 201 && showMessage && <p className='bg-lime-700'>دسته بندی با موفقیت اضافه شد</p>}

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