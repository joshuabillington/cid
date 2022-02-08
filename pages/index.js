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
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Header />
        <Hero title='Your XMPIE Specialists' text='Harnessing the power of efficient cross-media and variable data direct marketing.  Making it personal and effective.'/>
        <Title title="Intelligent Designs That Work for You" text='Carswell Intelligent Designs specializes in building customized XMPie templates that adhere to your personalized business rules.  We’ll transform your old, static designs that are like a “one-trick pony” into dynamic documents that intuitively shift to be an all-in-one solution, customized to meet your branding needs.We have experience designing templates to produce endless outcomes based on personalized data and corporate requirements, using XMPie.  Your Carswell-customized documents will make full use of the powerful functions of XMPie, allowing the integration of automated graphics, text, and logos into our custom-built templates resulting in a user-friendly and efficient experience.'/>
        <Portfolio />
        <Form id="contact"/>
        
      </main>

      <footer>
        <Footer />
      </footer>
  </div>
  )
}
