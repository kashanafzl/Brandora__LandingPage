import React, { useEffect } from 'react'
import './problemstatement.css';
import sadimg from '../../../assets/images/sad.png';
import Aos from "aos";
import "aos/dist/aos.css"

function Problemstatement() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <>
   
          <div className='problemstatement'>
                <div className='problemstatement__text'>
                    <div className='fristproblemstatement__text' >
                        <h2 id='heading2' data-aos="fade-right"   >But Why Is Desiging A  <br /> 
                         Product For Yourself <br />
                         Challenging</h2>
                        <div className='secproblemstatement__text'>
                            <h2 id='heading2'  data-aos="fade-right" >Finding Your Target <br />
                              Audience And Understaning <br /> Their Pain-Points</h2>
                        </div>
                    </div>
                    <div className='problemstatement__img'>
                        <img src={sadimg} alt=''></img>
                    </div>
                </div>
            </div>
            {/* light mode <div className='secproblemstatement__text'>
                            <h2>Finding Your Target <br /> Audience And Understaning <br /> Their Pain-Points</h2>
                        </div> */}
        </>
    )
}

export default Problemstatement
