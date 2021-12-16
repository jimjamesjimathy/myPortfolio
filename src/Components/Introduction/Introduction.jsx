import { init } from 'ityped';
import { useEffect, useRef } from 'react';

import './introduction.scss';


export default function Introduction() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            startDelay: 3000,
            showCursor: true,
            backDelay: 1500,
            backSpeed: 75,
            strings: ['Web Developer', 'Content Creator', 'Nerd']
        })
    }, []);

    return (
        <div className='introduction' id='introduction'> 
            <div className='intro-content'>
                <div className='wrapper'>
                    <div className='wrapper-text'>
                        <div className='titleTop'>
                            <h4>My name is:</h4>
                            <h1><span className='james'>JAMES</span> Kirkwood</h1>
                        </div>
                        <div className='titleBottom'>
                            <div className='spacer'></div>
                            <h3>i am a: <span ref={textRef}></span></h3>
                        </div>
                    </div>
                        <div className='circle'></div>
                        <div className="square"></div>

                        <a className='rectangle' href='#portfolio'>
                            <h4>View my Portfolio</h4>
                        </a>
                </div>
            </div>
        </div>
    )
};
