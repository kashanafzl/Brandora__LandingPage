import React, { useEffect } from 'react'
import "./solthired.css";


import Aos from "aos";
import "aos/dist/aos.css"



function Solthired() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])



    return (
        <div data-aos="fade-down" className='solthired'>

            <div className='first_solthired'>
                <span>We keep</span>
            </div>

            {/* <div className='second_solthired'>
                <span>You and your</span>
            </div> */}

            <div className='customer_heading'>
                <h2>User</h2>
            </div>

            <div className='fourth_solthired'>
                <span>in the</span>
            </div>

            <div className='fifth_solthired'>
                <span>center</span>
            </div>

        </div>
    )
}

export default Solthired
