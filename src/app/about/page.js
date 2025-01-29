import Head from 'next/head';

function About() {
   return (
      <>
         <Head>
            <title>Home Page</title>
            <meta name="description" content="Welcome to the Home Page" />
         </Head>
         <div className="container-fluid mt-3">
            <h1>Welcome to the Home Page!</h1>
            <p>Explore more by navigating through the site.</p>
         </div>
      </>
   );
}

export default About;