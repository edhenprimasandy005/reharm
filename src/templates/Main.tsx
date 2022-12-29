import type { ReactNode } from 'react';

import Footer from './MainComponents/footer';
import Header from './MainComponents/header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {props.meta}
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export { Main };
