import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';
import { ApolloProvider } from '@apollo/client';

import apolloClient from '../lib/apollo';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ApolloProvider client={apolloClient}>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  );
}

export default MyApp;
