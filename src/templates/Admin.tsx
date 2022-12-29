import React from 'react';

import { Meta } from '@/layouts/Meta';

const Admin = ({ children }: any) => {
  return (
    <>
      <Meta title="Reharm Music Courses" description="Reharm Music Courses" />
      <header>Website</header>
      <main>{children}</main>
      <aside>Sidebar</aside>
      <footer>&copy; Website</footer>
    </>
  );
};

export default Admin;
