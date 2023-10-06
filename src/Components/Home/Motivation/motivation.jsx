import React, { useRef, useState } from 'react';
import "./motivation.css";
import { BsPlay, BsPause } from 'react-icons/bs';
import sendvideo from '../../../assets/images/finalvideo.mp4' 

function Motivation() {
    const myvideo = useRef(null);
    const [paused, setPaused] = useState(false);

    function handlePlayVideo() {
        if (paused) {
            setPaused(false);
            myvideo.current.play();
        } else {
            setPaused(true);
            myvideo.current.pause();
        }
    }
    function mouseon() {
        var cursor = document.getElementById("cursor")
        document.addEventListener('mousemove', function (e) {
            let x = e.clientX;
            let y = e.clientY;
            console.log(x, y);
            cursor.style.top = y + "px";
            cursor.style.left = x + "px";
        })
    }



    return (
        <div className='motivation' id='motivation' onMouseOver={mouseon} onClick={() => { handlePlayVideo() }}>

            <video autoPlay muted loop ref={myvideo} className='motivation__video'> 
                <source src={sendvideo} type="video/mp4" />
                Your browser does not support this video.
            </video>
            <div className='motivation__cursor' id='cursor' >
                <span>{paused ? <BsPlay className='cursor_icon' /> : <BsPause className='cursor_icon' />}</span>
            </div>

        </div>
    )
}

export default Motivation
