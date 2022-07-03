import Head from 'next/head';
import { Header } from '../../../stories/Header';
import Footer from '../../navigation/footer/Footer';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>eGarage</title>
      </Head>
      <div className={`min-h-screen flex flex-col ${justify}`} {...divProps}>
        <Header />
          <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
