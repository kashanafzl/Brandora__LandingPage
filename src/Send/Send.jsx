

// import design1 from '../assets/images/design1.svg';
// import design2 from '../assets/images/design2.svg';
// import design3 from '../assets/images/design3.svg';
// import design4 from '../assets/images/design4.svg';
import { Icon } from '@iconify/react';

// videos
import sendvideo from '../assets/videos/send.mp4'
import discussvideo from '../assets/videos/Discuss.mp4'
import topkeyvideo from '../assets/videos/topkey.mp4'


import discusslogo from '../assets/images/discusslogo.svg'

// import { Link } from 'react-router-dom';

import Nav from '../Components/Home/Nav/Nav'
import Sendlogo from '../assets/images/sendlogo.svg'
// import sendframe from '../assets/images/sendframe.svg'

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
                    {/* <img src={sendframe} alt="" /> */}
                    <video  src={sendvideo} width="900" height="400" autoPlay muted loop />
                </div>
                
            </section>

        
            <section className="horizontal-section">
                <div className='discussleftside'>

                    <img className='discusslogo' src={discusslogo} alt="" />

                    <div>
                        The Ultimate Platform  for
                        <br />
                        <span>  Effective Collaboration</span>
                    </div>


                    <span>Send was created to streamline team communication and
                        <br />  collaboration. With features like customizable channels,
                        <br /> direct messaging, efficient file sharing, and real-time
                        <br /> notifications.</span>
                    <div><button id='discussdesignbtn'>View Case study <Icon icon="maki:arrow" /></button></div>
                </div>
            </section>

            {/* Section 02 */}
            <section className="horizontal-section">

                <div className='sendrightside'>
                    {/* <img src={sendframe} alt="" /> */}
                    <video  src={discussvideo} width="900" height="400" autoPlay muted loop />
                </div>
            </section>


            {/* Section 03 */}
            <section className="horizontal-section">
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
                    {/* <img src={sendframe} alt="" /> */}
                    <video  src={topkeyvideo} width="900" height="400" autoPlay muted loop />
                </div>
            </section>
        </main>

        </>
    );
};

export default Swiper;
















// import React, { useEffect } from 'react';
// import { motion, useAnimation, useScroll } from 'framer-motion';
// import { Icon } from '@iconify/react';
// import Nav from '../Components/Home/Nav/Nav';
// import Sendlogo from '../assets/images/sendlogo.svg';
// import sendvideo from '../assets/videos/send.mp4';
// import discussvideo from '../assets/videos/Discuss.mp4';
// import topkeyvideo from '../assets/videos/topkey.mp4';
// import discusslogo from '../assets/images/discusslogo.svg';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import './Send.css';
// import { useNavigate } from 'react-router-dom';

// gsap.registerPlugin(ScrollTrigger);

// const Swiper = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const horizontalSections = gsap.utils.toArray('.horizontal-section');
//       gsap.to(horizontalSections, {
//         xPercent: -100 * (horizontalSections.length - 1),
//         ease: 'none',
//         scrollTrigger: {
//           trigger: '#container',
//           pin: true,
//           scrub: 1,
//           snap: 1 / (horizontalSections.length - 1),
//           end: () => '+=' + document.querySelector('#container').offsetWidth,
//         },
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   const { scrollYProgress } = useScroll();
//   const controls = useAnimation();



//   useEffect(() => {
//     console.log('Scroll Progress:', scrollYProgress);
//     if (scrollYProgress === 1) {
//       // Scroll progress is 100%, navigate to the "/discuss" path
//       navigate("/discuss");
//     }
//   }, [scrollYProgress, navigate]);

  
//   useEffect(() => {
//     controls.start({ scaleX: scrollYProgress });
//   }, [controls, scrollYProgress]);

//   return (
//     <>
//       <Nav />

//       <main id="container">
//         <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
//         <section className="horizontal-section">
//           <div className="sendleftside">
//             <img className="sendlogo1" src={Sendlogo} alt="" />
//             <div>
//               The Ultimate Platform for
//               <br />
//               <span> Effective Collaboration</span>
//             </div>
//             <span>
//               Send was created to streamline team communication and
//               <br /> collaboration. With features like customizable channels,
//               <br /> direct messaging, efficient file sharing, and real-time
//               <br /> notifications.
//             </span>
//             <div>
//               <button id="senddesignbtn">
//                 View Case study <Icon icon="maki:arrow" />
//               </button>
//             </div>
//           </div>
//         </section>
//         <section className="horizontal-section">
//           <div className="sendrightside">
//             <video src={sendvideo} width="900" height="400" autoPlay muted loop />
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Swiper;
