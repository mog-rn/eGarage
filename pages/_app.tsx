import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';
import { ApolloClient, ApolloProvider } from '@apollo/client';

import apolloClient from '../lib/apollo';
import { UserProvider } from '@auth0/nextjs-auth0';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;
