import React from 'react'
import Style from './IntroTv.module.css'

function IntroTv() {
    return (
        // <div>IntroTv</div>
        <div className={Style.introTv}>
            <div className={Style.menuBar}>
                <div className={Style.circle + " " + Style.Red} ></div>
                <div className={Style.circle + " " + Style.Yellow}></div>
                <div className={Style.circle + " " + Style.Green}></div>
            </div>
            <div className='content'>
                <p>First line</p>
                <p>Second line</p>
                <p>Third line</p>
            </div>
        </div>
    )
}

export default IntroTv