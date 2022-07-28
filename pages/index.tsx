import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Web View</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="bg-white h-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Web View Demo
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
