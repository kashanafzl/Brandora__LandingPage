import React, { useRef } from 'react';

import './experience.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);
function Experience() {
    const sectionRef = useRef(null);
    const h1Ref = useRef(null);
  
    useEffect(() => {
      const section = sectionRef.current;
      const h1 = h1Ref.current;
  
      //       gsap.set(h1, { scale: 3,opacity:0 });

      gsap.set(h1, { scale: 0,opacity:0 });
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 0%',
          scrub: true,
          markers: false, // for debugging purposes only
        },
      });
  
      tl.to(h1, {
        scale: 1,
        opacity:1,
        duration: 1,
      });
    }, []);
  
    return (
        <div className='experience' ref={sectionRef}>
            <div className='frist_exptext'>
                <span>With</span>
            </div>
            <div className='experience_heading'>
                <h2 ref={h1Ref}>7+</h2>
            </div>
            <div className='last_exptext'>
                <span>years of experience with<br/> proven track record</span>
            </div>
        </div>
    )
}

export default Experience
