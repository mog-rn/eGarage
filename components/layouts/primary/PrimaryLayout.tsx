import Head from "next/head";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
    justify?: 'items-center' | 'items-start'
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, justify = 'items-center', ...divProps }) => {
    return (
        <>
            <Head>
                <title>eGarage</title>
            </Head>
            <div className={`min-h-screen flex flex-col ${justify}`} {...divProps}>
            <main className="">{children}</main>
            </div>
        </>
    )
}

export default PrimaryLayout;