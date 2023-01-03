import React from 'react'
import Footer from '../components/footer'
import Head from '../components/head'
import Header from '../components/header'
import HomeContent from '../contents/home'

export default function Home() {
  return (
    <div>
        <Header />
        <Head />
        <HomeContent />
        <Footer />

        {/* <div id="preloader"></div> */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </div>
  )
}
