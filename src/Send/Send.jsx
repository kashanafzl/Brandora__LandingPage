
import design1 from '../assets/images/design1.svg';
import design2 from '../assets/images/design2.svg';
import design3 from '../assets/images/design3.svg';
import design4 from '../assets/images/design4.svg';
import { Icon } from '@iconify/react';

// import { Link } from 'react-router-dom';

import Nav from '../Components/Home/Nav/Nav'
import Sendlogo from '../assets/images/sendlogo.svg'
import sendframe from '../assets/images/sendframe.svg'

import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Send.css';

gsap.registerPlugin(ScrollTrigger);

const Swiper = () => {
    React.useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // ---------- selecting all horizontal sections
            const horizontalSections = gsap.utils.toArray(".horizontal-section");

            // ---------- applying horizontal scroll animation
            gsap.to(horizontalSections, {
                xPercent: -100 * (horizontalSections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: "#container",
                    pin: true,
                    scrub: 1,
                    snap: 1 / (horizontalSections.length - 1),
                    end: () => "+=" + document.querySelector("#container").offsetWidth
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (


        <>

        <Nav/>
        <main id="container">
            {/* Section 01 */}
            <section className="horizontal-section">
                {/* <h1 className="heading">Horizontal Scroll</h1> */}
                <div className='sendleftside'>

                    <img className='sendlogo1' src={Sendlogo} alt="" />

                    <div>
                        The Ultimate Platform  for
                        <br />
                        <span>  Effective Collaboration</span>
                    </div>


                    <span>Send was created to streamline team communication and
                        <br />  collaboration. With features like customizable channels,
                        <br /> direct messaging, efficient file sharing, and real-time
                        <br /> notifications.</span>
                    <div><button id='senddesignbtn'>View Case study <Icon icon="maki:arrow" /></button></div>
                </div>
            </section>

            {/* Section 02 */}
            <section className="horizontal-section">

                <div className='sendrightside'>
                    <img src={sendframe} alt="" />
                </div>
            </section>

            {/* Section 03 */}
            <section className="horizontal-section">
    
                <div className='sendrightside'>
                    <img src={design2} alt="" />
                </div>
            </section>

            {/* Section 04 */}
            <section className="horizontal-section">
        
                <div className='sendrightside'>
                    <img src={design3} alt="" />
                </div>
            </section>
        </main>

        </>
    );
};

export default Swiper;