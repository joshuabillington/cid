import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Title from '../components/title'
import Form from '../components/form'
import Portfolio from '../components/portfolio'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div>
      <Head>
          <title> Carswell Intelligent Designs </title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Header />
        <Hero title='Your XMPIE Specialists'/>
        <Title />
        <Portfolio />
        <Form />
        
      </main>

      <footer>
        <Footer />
      </footer>
  </div>
  )
}
