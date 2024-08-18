import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
   return (
      <div className='w-80 sm:w-96 text-center mx-auto mt-20 py-12 rounded-lg border-4 border-primary-Hover'>
         <h3 className='sm:text-lg font-semibold'>ارور 404! پیج مورد نظر یافت نشد!</h3>
         <button className='py-1.5 px-2 mt-3 text-sm sm:text-base transition-all hover:bg-primary-Hover'>
            <Link to="/">برگشت به صفحه اصلی</Link>
         </button>
      </div>
   );
}

export default PageNotFound;