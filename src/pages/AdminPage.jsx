import CategoryForm from 'components/templates/CategoryForm';
import CategoryList from 'components/templates/CategoryList';

function AdminPage() {
   return (
      <div className='flex flex-col md:flex-row'>
         <CategoryForm />
         <CategoryList />
      </div>
   );
}

export default AdminPage;