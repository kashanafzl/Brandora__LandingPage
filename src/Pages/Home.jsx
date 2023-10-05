import React, { useLayoutEffect, useRef } from 'react'
import HomeTagline from '../Components/Home/HomeTagline/HomeTagline'
import Nav from '../Components/Home/Nav/Nav'
import SocialHandles from '../Components/Home/Social/SocialHandles'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import gsap from 'gsap'
import ProblemCycle from '../Components/Home/ProblemCycle/ProblemCycle';
import Motivation from '../Components/Home/Motivation/motivation';
import Problemstatement from '../Components/Home/Problemstatement/problemstatement';
import Solfrist from '../Components/Home/Solfrist/solfrist';
import Solsecond from '../Components/Home/Solsecond/solsecond';
import Solthired from '../Components/Home/Solthired/solthired';
import Experience from '../Components/Home/Experience/experience';
import Portfolio from '../Components/Home/Portfolio/portfolio';
import Testimonial from '../Components/Home/Testimonials/testimonial';
import Consultancy from '../Components/Home/Consultancy/consultancy';
import Contactus from '../Components/Home/ContactUs/contactus';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);
function Home() {
  const svgline = useRef(null)
  useLayoutEffect(() => {
    const anim = gsap.timeline({ paused: true, repeat: false, yoyo: true, repeatDelay: 0.5 })
    const TextAnim = gsap.timeline({ paused: true, repeat: false, yoyo: true, repeatDelay: 0.5 }, "=+1")
    anim.to('.svgPath', { duration: 1.0, strokeDashoffset: 0 })
    TextAnim.to('.firstTag h1,.thirdTag h1,.secTag h1,.forthTag h1', { duration: 1.0, top: 0 })
    gsap.delayedCall(1.5, function () {
      anim.play()
      TextAnim.play()
    });
   



    return () => {

    };
  }, [])
  return (
    <>

      <section className='scroll'>
        <div className="mainline">
        <div className="HomeSection">
          <Nav />
          <HomeTagline />
          <SocialHandles />
       
          <div className="mainline">
          <div className="LineSvg">
            <svg ref={svgline} width="1450" height="500" viewBox="0 0 1450 867" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='svgPath' strokeDasharray={'3020'} strokeDashoffset={'3020'} d="M1 52.4829C306 -42.8504 806.5 -7.37315 618 194.983C333.394 500.509 559 428.144 704.5 417.5C793.5 410.989 707.4 511.883 381 689.483C294.5 743 251 974.627 822 801.983C1397.63 627.939 1401.5 683.627 1449 714.983" stroke="#07288B" strokeWidth="3" />
            </svg>
          </div>
        </div>
        </div>
        </div>
        <div className="ProblemCycle">
        <ProblemCycle />
      </div>
        <div className='motivation__section'>
          <Motivation />
        </div>
        <div className='Problemstatement__section'>
          <Problemstatement />
        </div>
        <div className='Fristsol__section'>
          <Solfrist />
        </div>
        <div className='Secondsol__section'>
          <Solsecond />
        </div>
        <div className='Thiredsol__section'>
          <Solthired />
        </div>
        <div className='Experience__section'>
          <Experience />
        </div>
        <div className='Portfolio__section'>
          <Portfolio />
        </div>
        <div className='Testimonial__section'>
          <Testimonial />
        </div>
        <div className='Consultancy__section'>
          <Consultancy />
        </div>
        <div className='Contactus__section'>
          <Contactus />
        </div>

        </section>
    </>
  )
}
export default Home