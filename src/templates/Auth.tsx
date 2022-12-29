/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

import { Meta } from '@/layouts/Meta';

const Auth = ({ children }: any) => {
  return (
    <>
      <Meta title="Reharm Music Courses" description="Reharm Music Courses" />
      <div className="login-bg flex h-screen min-h-full items-center justify-center">
        <div>{children}</div>
      </div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </>
  );
};

export default Auth;
