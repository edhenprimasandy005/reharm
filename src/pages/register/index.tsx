import Button from '@components/elements/button';
import Router from 'next/router';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { useActions } from '@/overmind/index';
import AuthLayout from '@/templates/Auth';

const Register = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn } = useActions();
  const onSignUp = () => {
    signIn({ user: email, password });
    Router.push('/');
  };
  return (
    <div className="flex items-center justify-center rounded-3xl bg-white shadow-lg">
      <Fade duration={600} cascade>
        <div className="flex flex-col items-center justify-center p-5 lg:w-96">
          <div className="mb-5 text-3xl font-bold">Sign Up</div>
          <div className="mb-3 w-full">
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              First name
            </label>
            <input
              type="text"
              id="firstname"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="First name"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3 w-full">
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Last name
            </label>
            <input
              type="text"
              id="lastname"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Last name"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3 w-full">
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email-address-icon"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-10 w-full">
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> Username already taken!
          </p> */}
          </div>
          <div className="mb-5 flex w-full flex-row justify-center">
            <Button
              onClick={onSignUp}
              className="group relative inline-block w-40 items-center rounded-full px-5 py-2.5 text-center font-medium text-white"
            >
              <span className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-50 blur-sm"></span>
              <span className="absolute inset-0 mt-0.5 ml-0.5 h-full w-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-50 group-active:opacity-0"></span>
              <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-xl transition-all duration-200 ease-out group-hover:blur-sm group-active:opacity-0"></span>
              <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-br from-red-500 to-orange-400 transition duration-200 ease-out"></span>
              <span className="relative">Register</span>
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

export default Register;

Register.getLayout = (page: any) => {
  return <AuthLayout>{page}</AuthLayout>;
};
