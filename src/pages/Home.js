import React from "react";
import Terminal from "../components/Terminal";
import IntroTv from "../components/introTV/introTv";

export default function home() {


    const style = {
        color: '#fff'
    }

    return (
        <div style={style}>
            <Terminal/>
            <IntroTv/>
        </div>
    );
}
