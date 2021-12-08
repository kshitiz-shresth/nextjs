import React from 'react'
import Navbar from '../components/Navbar'
import MyHead from '../components/MyHead'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/dist/client/link';

import { Carousel, Container } from 'react-bootstrap'

const index = () => {
  return (
    <>
      <Head>
        <title>InstaBand</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section>
        <Carousel fade>
          <Carousel.Item className={`${styles.sliderBox}`}>
            <img
              className={`d-block w-100 ${styles.sliderBox__image}`}
              src="/images/hero-img-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <Link href="/dashboard"><a className={`insta-btn d-none d-md-inline`}>Explore</a></Link>
              <p className={`mt-4`}>With one click, you will see multiple bands available for your big day.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className={``}>
        <Container>
             
        </Container>
      </section>

    </>
  )
}
export default index
