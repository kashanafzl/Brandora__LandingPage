import React, { useEffect } from 'react'
import './solfrist.css';

import Aos from "aos";
import "aos/dist/aos.css"

function Solfrist() {


    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])


    return (
        <>
            <div className='solfrist'>
                <div data-aos="zoom-out"
                    className='sol_header'>
                    <span>No worries,</span>
                </div>
                <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                    className='sol_fristheading'>
                    <h2>We</h2>
                </div>
                <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                    className='sol_secheading'>
                    <h2>Understand </h2>
                </div>
                <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                    className='sol_thiredheading'>
                    <h2>Your&nbsp;Pain</h2>
                </div>
            </div>
        </>
    )
}

export default Solfrist
