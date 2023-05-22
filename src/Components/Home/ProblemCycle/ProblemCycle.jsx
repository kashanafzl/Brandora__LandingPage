import React from 'react'
import './problem.css'
import { useEffect } from "react";
import { gsap } from "gsap";

function ProblemCycle() {
    useEffect(() => {
        // = slider intro =========
        var imgs = gsap.utils.toArray(".singleQuotes"),
            noImgs = imgs.length,
            next = 3, // time to change
            endless,
            endlessMinus;

        var img00,
            img01,
            img02,
            img03,
            img04;

        var start = 0;
        var switchJump = 0;
        var initCounter = 0;

        var vars = {};

        var action;


        function crossfade() {

            Array.prototype.forEach.call(imgs, function (img, index) {
                if (index === 0) { img00 = imgs[0]; }
                if (index === 1) { img01 = imgs[1]; }
                if (index === 2) { img02 = imgs[2]; }
                if (index === 3) { img03 = imgs[3]; }
                if (index >= 4) { img04 = imgs[index]; }
            });

            if (initCounter === 0) {
                gsap.set(img00, { className: "singleQuotes IMAGE_0" })
                gsap.set(img01, { className: "singleQuotes IMAGE_1" })
                gsap.set(img02, { className: "singleQuotes IMAGE_2" })
                gsap.set(img03, { className: "singleQuotes IMAGE_3" })
                gsap.set(img04, { className: "singleQuotes IMAGE_4" })
            }


            initCounter++;
            if (start === 0) {
                action = gsap.timeline()
                    .to(img00, { x: 20, y: 0, duration: 0.5, opacity: .05 })
                    .set(img00, { zIndex: 1 }, 0.2)

                    .set(img01, { zIndex: 2 }, 0.1)
                    .to(img01, { x: 20, duration: 0.5, opacity: 1 }, 0.1)
                    
                    .to(img01, { y: 150, duration: 0.5 }, 0.3)

                    .to(img02, { x: 20, y: 300, duration: 0.5, opacity: 0.05 }, 0.1)
                    // .set(img02, { zIndex: 0 }, )

                    .to(img03, { x: 0, y: -125, zIndex: 0, duration: 1, opacity: 0 }, 0)
                    .set(img03, { x: 20, y: 300 })

                    .to(img04, { x: 0, y: -125, zIndex: 0, duration: 1, opacity: 0 }, 0)
                    .set(img04, { x: 20, y: 300 })

                    .to('.StoryCarousels', { autoAlpha: 1 })

            } else {

                action = gsap.timeline()
                    .to(img00, { x: 20, y: 200, duration: 1, opacity: .5 })
                    .set(img00, { zIndex: 1 }, 0.2)

                    .set(img01, { zIndex: 2 }, 0.1)
                    .to(img01, { x: 60, duration: 1, opacity: 1 }, 0.1)
                    .to(img01, { y: 100, duration: 1 }, 0.3)

                    .to(img02, { x: 20, y: 0, duration: 1, opacity: .5 }, 0.1)

                    .to(img03, { x: 20, y: 300, zIndex: 0, duration: 1, opacity: 0 }, 0)
                    .set(img03, { x: 0, y: -125 })

                    .to(img04, { x: 20, y: 300, zIndex: 0, duration: 1, opacity: 0 }, 0)
                    .set(img04, { x: 0, y: -125 })
                    .to('.StoryCarousels', { autoAlpha: 1 })



            }
            imgs.push(imgs.shift());
            endless = gsap.delayedCall(next, crossfade);

        }


        // start the crossfade
        endlessMinus = gsap.delayedCall();
        endless = gsap.delayedCall(0, crossfade);
        
        console.log(endless);
        console.log(endlessMinus);
        console.log(noImgs);
        console.log(switchJump);
        console.log(action);
        console.log(vars);

    }, [])



    return (
        <>
            <div className="Problem">
                <div className="StoryCarousels">
                    <div className="singleQuotes">
                        <div className="secStoryQoute">
                            <h2>creating pixel-perfect Design</h2>
                        </div>
                    </div>
                    <div className="singleQuotes">
                        <div className="secStoryQoute">
                            <h2>with a problem solving mindset</h2>
                        </div>
                    </div>
                    <div className="singleQuotes">
                        <div className="secStoryQoute">
                            <h2>Using Design Thinking and latest Design Standards</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProblemCycle