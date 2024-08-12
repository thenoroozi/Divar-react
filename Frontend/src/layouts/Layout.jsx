import React from 'react';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

function Layout({ children }) {
   return (
      <>
         <Header />
         <div className='min-h-screen'>{children}</div>
         <Footer />
      </>
   );
}

export default Layout;