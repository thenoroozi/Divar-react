import { useQuery } from "@tanstack/react-query";

import { deleteCategory, getCategory } from "services/admin";
import Loader from "components/modules/Loader";


const CategoryList = () => {
   const { data, isLoading } = useQuery(["get-categories"], getCategory);
   console.log({ data, isLoading });

   return (
      <div className="mt-12 mb-16">
         <h3 className="mb-8 border-b-2 border-primary w-fit pb-1 font-semibold">لیست دسته بندی ها</h3>
         {isLoading ?
            <Loader /> :
            data.data.map(i =>
               <div className="flex justify-between my-5 p-2 border-2 border-slate-200 rounded"
                  key={i._id}>
                  <div className="flex items-center">
                     <img src={`${i.icon}.svg`} />
                     <h5 className="mr-2.5 text-sm w-32">{i.name}</h5>
                  </div>
                  <div className="flex items-center">
                     <button onClick={() => deleteCategory(i._id)} className="py-0.5 px-2 bg-white text-primary border-2 border-primary transition-all hover:bg-primary hover:text-white">حذف</button>
                     <p className="w-36 text-center text-primary mr-4">slug: {i.slug}</p>
                  </div>
               </div>)
         }
      </div >
   );
};

export default CategoryList;