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
        <hr />
        <Title title="About Us" text='We are a small team of dedicated professionals with decades of experience ready to support you and your company’s XMPie needs. Whether embarking on a new venture or growing your current project, we have the skills to be a valuable asset to your team.  With backgrounds in printing, software development, and documentation, we provide the essential skills to make any XMPie project a resounding success.

Meet our team today and find out how we can help you use XMPie as a seamless online solution that caters to your specific needs.
'/>
        <Form />
        
      </main>

      <footer>
        <Footer />
      </footer>
  </div>
  )
}