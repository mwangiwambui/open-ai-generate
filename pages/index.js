import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Home.module.css";


export default function Home() {

  const [count, setCount] = useState(0);


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
          <p>You've used this app {count} times
          </p>
          <form>
            <input type="text" name='animal' placeholder="Enter an animal"></input>
            <input type="submit" onClick={(e) => {
              e.preventDefault()
              setCount(count+1)}}
              ></input>

          </form>
        </main>
      
      </div>
      </div>
    </>
  );
}
