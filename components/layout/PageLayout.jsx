import React from 'react';
import PageHeader from '../navigation/Navbar';
//import './PageLayout.css'; // Or your preferred styling

function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <PageHeader />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default PageLayout;