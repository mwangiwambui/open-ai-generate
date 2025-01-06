import Head from "next/head";

import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <img src="/favicon.ico"/>
          <h3>Name My Pet</h3>
          <form>
            <input type="text" name='animal' placeholder="Enter an animal"></input>
            <input type="submit" name='animal' placeholder="Enter an animal"></input>

          </form>
        </main>
      
      </div>
      </div>
    </>
  );
}
