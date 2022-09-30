import React from 'react'
import Head from 'next/head'
import Semafaro from '../src/components/Semafaro'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Semáfaro</title>
      </Head>

      <main>
            <Semafaro />
      </main>
    </>
  )
}

export default Home