import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';

import apolloClient from '../lib/apollo';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        getLayout(
        <Component {...pageProps} /> )
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;
