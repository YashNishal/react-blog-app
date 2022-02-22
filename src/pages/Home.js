import React from "react";
import IntroTv from "../components/introTV/introTv";
import AnimatedPage from "../components/AnimatedPages/AnimatedPages";
import Style from '../css/Home.module.css'

export default function home() {

    return (
        <AnimatedPage>
            <div className={Style.intro}>
                <IntroTv />
                
                {/* <div className={Style.introHead}>
                    <h1>A general Yet fun blogpage</h1>
                </div> */}
            </div>

        </AnimatedPage>
    );
}
