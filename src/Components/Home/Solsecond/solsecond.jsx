import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

import './solsecond.css';

function Solsecond() {

    
    
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])


    return (
        <div className='solsecond'>
            <div  data-aos="fade-down" className='solsecond__header'>
                <h2>We&nbsp;Understand&nbsp;Business</h2>
            </div>
            <div  data-aos="fade-down" className='solsecond__text'>
                <span id='solsecond_Fspan'>We&nbsp;consider&nbsp;your </span>
                <span>Marketing&nbsp;and&nbsp;branding </span>
                <span>efforts&nbsp;while&nbsp;crafting&nbsp;uX </span>
            </div>
        </div>
    )
}

export default Solsecond
