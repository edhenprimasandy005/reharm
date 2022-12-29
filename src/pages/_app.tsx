import '../styles/global.scss';
import '@styles/index.scss';

import { store } from '@/overmind/index';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Provider } from 'overmind-react';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <Provider value={store}>
      <Component {...pageProps} />
    </Provider>,
  );
};

export default App;
