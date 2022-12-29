import Button from '@components/elements/button';
import { useActions } from '@overmind/index';
import Router from 'next/router';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { IoIosLock } from 'react-icons/io';

import AuthLayout from '@/templates/Auth';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn } = useActions();
  const onSignIn = () => {
    signIn({ user: email, password });
    Router.push('/');
  };
  return (
    <div className="flex items-center justify-center rounded-3xl bg-white shadow-lg">
      <Fade duration={600} cascade>
        <div className="flex flex-col items-center justify-center p-5">
          <div className="mb-5 text-3xl font-bold">Sign In</div>
          <div className="mb-3">
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="email"
                id="email-address-icon"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <div className="mb-10">
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <IoIosLock color="#a0aec0" />
              </div>
              <input
                type="password"
                id="password"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> Username already taken!
          </p> */}
          </div>
          <div className="mb-5 flex w-full flex-row justify-center">
            <Button
              onClick={onSignIn}
              className="group relative inline-block w-40 items-center rounded-full px-5 py-2.5 text-center font-medium text-white"
            >
              <span className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-50 blur-sm"></span>
              <span className="absolute inset-0 mt-0.5 ml-0.5 h-full w-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-50 group-active:opacity-0"></span>
              <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-xl transition-all duration-200 ease-out group-hover:blur-sm group-active:opacity-0"></span>
              <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-br from-red-500 to-orange-400 transition duration-200 ease-out"></span>
              <span className="relative">Login</span>
            </Button>
          </div>
          <div className="">
            <span className="text-xs text-gray-500">&copy; Reharm 2022</span>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Login;

Login.getLayout = (page: any) => {
  return <AuthLayout>{page}</AuthLayout>;
};
