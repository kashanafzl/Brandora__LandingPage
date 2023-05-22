import React from 'react';
import './contactus.css';
import { Icon } from '@iconify/react';
import { AiOutlineLeft } from 'react-icons/ai';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS


import emailjs from '@emailjs/browser';

function Contactus() {
    const sendEmail=(e)=>{
        e.preventDefault()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your email has been send',
            showConfirmButton: false,
            timer: 1500
          })

        emailjs.sendForm('service_dk75e5v' , 'template_xh1opu2' , e.target , '0SimwlN_gedro8gKp')
    }


 


    return (
        <div>
            <div className='talkjs'>
                <div className='Talktext'>
                    <form onSubmit={sendEmail}>
                        <p className='Talktext_p'>Hello, Brandora Team!</p>
                        <label>
                            My Name Is
                            <input type="text" id='inputwidth'
                                placeholder="Your Name" />
                            <label>

                                From
                                <input id='Frominput' type="text"
                                    placeholder="Company" />
                            </label>
                        </label>


                        <div className='btnlineproperty'>
                            <label>I'd Like To Discuss
                            </label>
                            <div className="Btns-radio">
                                <div className="button">
                                    <input type="radio" id="a25" name="check-substitution-1" />
                                    <label className="btn btn-default">UI UX</label>
                                </div>
                                <div className="button">
                                    <input type="radio" id="a50" name="check-substitution-1" />
                                    <label className="btn btn-default" >Web Development</label>
                                </div>
                                <div className="button">
                                    <input type="radio" id="a75" name="check-substitution-1" />
                                    <label className="btn btn-default" >Consultancy</label>
                                </div>
                                <div className="button">
                                    <input type="radio" id="a100" name="check-substitution-1" />
                                    <label className="btn btn-default" >Product Design</label>
                                </div>
                                <div className="button">
                                    <input type="radio" id="a125" name="check-substitution-1" />
                                    <label className="btn btn-default" >Branding</label>
                                </div>
                                <div className="button">
                                    <input type="radio" id="a150" name="check-substitution-1" />
                                    <label className="btn btn-default" >Marketing</label>
                                </div>
                            </div>
                        </div>
                        <div className='project_idea'>
                            <label>Project Idea & Brief
                                <input
                                    id='inputwidth2'
                                    type="text"
                                    placeholder="Discription (Optional)"
                                />
                            </label>
                        </div>
                        <div className='btnlineproperty'>
                            <label>A Budget Of this project is</label>
                            <div className="Btns-radio">
                                <div className="button">
                                    <input type="radio" id="a225" name="check-substitution-2" />
                                    <label className="btn btn-default"><AiOutlineLeft />500$</label>
                                </div>
                                <div className="button">
                                    <input type="radio" id="a250" name="check-substitution-2" />
                                    <label className="btn btn-default">500$ - 1000$</label>
                                </div>
                                <div className="button">
                                    <input type="radio" id="a275" name="check-substitution-2" />
                                    <label className="btn btn-default">1000$ - 1500$</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Contact me at
                                <input
                                    id='inputwidth'
                                    type="text" 
                                    name='user-email'
                                    placeholder="Email Address" />
                            </label>
                        </div>
                        <div className='Butt'>
                            <button className='letbtn' type='submit'>Submit<Icon icon='ant-design:arrow-right-outlined' id='btnicon' /></button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contactus
