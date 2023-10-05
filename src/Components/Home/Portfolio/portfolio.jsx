import React, { useEffect } from 'react';
import './portfolio.css';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import img from '../../../assets/images/design1.svg';
import img1 from '../../../assets/images/design2.svg';
import img2 from '../../../assets/images/design3.svg';
import img4 from '../../../assets/images/design4.svg';


gsap.registerPlugin(ScrollTrigger);


function Portfolio() {


    useEffect(() => {
        const sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: "+=3500",
            }
        });
    }, [])

    return (
        <div className='portfolio'>
            <div className='portfolio_header'>
                <h2>Our Work</h2>
                <span>Here Some of Our Recent Projects!</span>
            </div>

            <div className="container portfolio_">
                <div className='portfolio_menu'>
                    <div className='portfolio_leftside panel'>
                        <div className='portfolio_leftside_img'>
                            <img src={img} alt=''></img>
                        </div>
                       
                        </div>
                       
                    <div className='portfolio_rightside  panel'>
                        
                    <div className='portfolio_leftside_img'>
                            <img src={img1} alt=''></img>
                        </div>
                       
                    </div>
                </div>

                <div className='portfolio_menu'>
                <div className='portfolio_leftside panel'>
                        <div className='portfolio_leftside_img'>
                            <img src={img} alt=''></img>
                        </div>
                       
                        </div>
                       
                    <div className='portfolio_rightside  panel'>
                        
                    <div className='portfolio_leftside_img'>
                            <img src={img2} alt=''></img>
                        </div>
                    </div>

                    <div className='portfolio_rightside  panel'>
                        <div className='portfolio_rightside_img'>
                            <img src={img4} alt=''></img>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
