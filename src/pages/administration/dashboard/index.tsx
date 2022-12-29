import React from 'react';

import AdminLayout from '@/templates/Admin';

const AdminDashboad = () => {
  return <div>Admin Dashboad</div>;
};

export default AdminDashboad;

AdminDashboad.getLayout = (page: any) => {
  return <AdminLayout>{page}</AdminLayout>;
};
