import React from 'react'
//import HeroSection from '../../subComponents/HeroSection'
import HeroSection from '../../subComponents/HeroSection'
import Footer from '../Footer/Footer'
import TopVillas from '../../subComponents/TopVillas'
import Regions from '../../subComponents/Regions'
import OurSpecialties from '../../subComponents/OurSpecialties'
import Host from '../../subComponents/Host'
import About from '../../subComponents/About'
import Contact from '../../subComponents/Contact'

const Home = () => {
  return (
    <>
    <article className='page'>
      <HeroSection/>
      <TopVillas/>
      <Regions/>
      <OurSpecialties/>
      <Host/>
      <About/>
      <Contact/>



    </article>
    </>
  )
}

export default Home