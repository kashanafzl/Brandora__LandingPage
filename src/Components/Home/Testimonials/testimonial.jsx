import React from 'react';
import './testimonial.css';
import { BsFillStarFill } from 'react-icons/bs';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { TfiArrowCircleLeft } from 'react-icons/tfi';
import img from "../../../assets/images/reviewclient.png";
import qotimg from '../../../assets/images/qot.svg'

function Testimonial() {
    return (
        <div className='testimonial'>
            <div className='testimonail_leftside'>
                <div className='testimonail_header'>
                    <div className='starandh4'>
                    <div className='test_clientprofile'>
                        <h4>Benbim</h4>
                        <a href='/#' >https://www.fiverr.com/benbim</a>
                    </div>

                    <div className='testimonial_stars'>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                    </div>
                    </div>

                </div>

                <img className='qotimg' src={qotimg} alt="" />
                <div className='testimaonial_review'>
                    <span>Jamal is great. He is always willing to have a call to discuss things,
                        he understands the requirements I have, and his deliveries are always fast
                        and really good. I had a very short timescale for this project and Jamal
                        moved some of his other projects around to fit this design work in. I really
                        appreciate testimonial_iconsit and the designs turned out great.
                    </span>
                    <img className='qotimg2' src={qotimg} alt="" />
                </div>
                <div className='testimonial_icons'>
                    <TfiArrowCircleLeft  className='testimonial_secicon' />
                    <TfiArrowCircleRight  className='testimonial_secicon'/>
                </div>

            </div>

            <div className='testimonial_image'>
                <img src={img} alt='' />
            </div>

        </div>
    )
}

export default Testimonial
