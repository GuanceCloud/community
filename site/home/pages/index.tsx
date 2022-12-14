import Head from 'next/head'
import React from 'react'
import Header from './01_Header'
import Hero from './02_Hero'
import Slack from './02_Slack'
import Contribution from './03_Contribution'
import CTA from './04_CTA'
import Footer from './05_Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Community | Guance Cloud</title>
        <meta name="description" content="Community for Guance Cloud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero />
      <Slack />
      <Contribution />
      <CTA />
      <Footer />
    </>
  )
}

