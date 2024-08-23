import React from 'react';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

function Layout({ children }) {
   return (
      <>
         <Header />
         <div className='min-h-screen px-5 sm:px-8'>{children}</div>
         <Footer />
      </>
   );
}

export default Layout;