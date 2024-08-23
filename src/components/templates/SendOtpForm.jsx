import React from 'react';
import toast from 'react-hot-toast';
import { sendOtp } from 'services/auth';
import { p2e } from 'utils/numbers';

function SendOtpForm({ mobile, setMobile, setStep }) {
   const REG=/^09(1[0-9]|3[0-9])[0-9]{7}/;

   const submitHandler = async (event) => {
      event.preventDefault();
     
      if (!REG.test(mobile)) {
         toast.error("لطفا شماره موبایل درست وارد کنید!");
         return;
      };

      const { response, error } = await sendOtp(mobile);
      if (response) {
         toast.success("کد با موفقیت ارسال شد")
         setStep(2);
      };
      if (error) toast.error(error.response.data.message);
   }
   return (
      <form 
      onSubmit={submitHandler}
      className='bg-white max-w-[500px] mx-3 flex flex-col mt-24 shadow-md rounded p-8 shadow-topLeft
      sm:mx-auto'>
         <p className='text-lg font-normal mb-4 pb-2 border-b-2'>ورود به حساب کاربری</p>
         <span className='text-slate-500 text-sm mb-4'>
            برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید. کد تایید به این شماره پیامک خواهد شد.
         </span>
         <label htmlFor="input" >شماره موبایل خود را وارد کنید</label>
         <input
            type="text"
            id='input'
            placeholder='شماره موبایل'
            value={mobile}
            onChange={e => setMobile(p2e(e.target.value))}
            className='mt-2.5 mb-5 p-1.5 outline-none'/>
         <button 
         className='w-28 py-1 px-2.5 hover:bg-primary-Hover'
         type='submit'>ارسال کد تایید</button>
      </form>
   );
}

export default SendOtpForm;