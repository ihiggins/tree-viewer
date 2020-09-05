import Head from 'next/head'
import React, { useState } from 'react';

import styles from '../styles/Home.module.css'

import Input from '../public/components/input/input'
import DTree from '../public/components/tree/tree'
const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];


export default function Home() {
  const [inputVal, setInputVal] = useState('');
  const [treeData, setTreeData] = useState(myTreeData);
  const  handleSubmit = async () =>{
    let response = await fetch(`/api/parse` , {
      method: 'post',
      body: JSON.stringify(inputVal)
    });
    let data = await response.json()
    
     setTreeData(data.tree)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Enter a url to see the 
          <code className={styles.code}>Dom Tree</code>
        </p>
        <Input value={inputVal}  onSubmit={handleSubmit} onChangeValue={(e) => setInputVal(e.target.value)}> </Input>
        <DTree data={treeData}></DTree>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
