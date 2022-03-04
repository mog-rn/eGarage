import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>eGarage</title>
        <meta name="description" content="This a web application that helps locate garages easily" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="font-thin">This is eGarage</h1>
    </div>
  )
}
