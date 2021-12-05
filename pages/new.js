import React from 'react'
import Navbar from '../components/Navbar'
import MyHead from '../components/MyHead'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

import { Carousel, Container } from 'react-bootstrap'

const index = () => {
  return (
    <Container bg="fluid">
      <Head>
        <title>NEW ITEM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section style={{ background:'#000' }}>

      </section>
    </Container>
  )
}
export default index
