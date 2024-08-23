import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { checkOtp } from 'services/auth';
import { getProfile } from 'services/user';
import { setCookie } from 'utils/cookie';
import { p2e } from 'utils/numbers';

function CheckOtpForm({ code, setCode, setStep, mobile }) {
   const navigate = useNavigate();
   const { refetch } = useQuery({
      queryKey: ["profile"],
      queryFn: getProfile
   });
   const submitHandler = async (event) => {
      event.preventDefault();

      if (code.length !== 5) return;

      const { response, error } = await checkOtp(mobile, code);

      if (response) {
         setCookie(response.data);
         toast.success("با موفقیت وارد حساب کاربری خود شدید")
      };
      navigate("/");
      refetch();

      if (error) toast.error(error.response.data.message);
   }
   return (
      <form
         onSubmit={submitHandler}
         className='bg-white max-w-[500px] mx-3 flex flex-col mt-24 shadow-md rounded p-8 shadow-topLeft
      sm:mx-auto'>
         <p className='text-lg font-normal mb-4 pb-2 border-b-2'>تایید کد پیامک شده</p>
         <span className='text-gray-500 text-sm mb-4'>کد پیامک شده به شماره‌ «{mobile}» را وارد کنید.</span>
         <label htmlFor="input">کد تایید را وارد کنید</label>
         <input
            type="text"
            id='input'
            placeholder='کد تایید'
            value={code}
            onChange={e => setCode(p2e(e.target.value))}
            className='mt-2.5 mb-5 p-1.5 outline-none' />
         <div className='w-full flex justify-between items-center'>
            <button
               className='w-28 py-1 px-2.5 hover:bg-primary-Hover'
               type='submit'>ورود</button>
            <button
               className='bg-white text-primary border border-primary w-36 hover:bg-primary hover:text-white transition-all'
               onClick={() => setStep(1)}>تغییر شماره موبایل</button>
         </div>
      </form>
   );
}

export default CheckOtpForm;