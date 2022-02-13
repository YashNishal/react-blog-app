import React, {useState, useEffect} from 'react'
import Style from './IntroTv.module.css'
import { Typewriter } from 'react-simple-typewriter'
import Final from './final'

var AnimationDelay = 4000

function IntroTv() {

    const totalContent = [
        "This is the First line of Intro TV",
        "This is the Second line of Intro TV",
        "This is the Third line of Intro TV",
    ]
    const [currentContent, setCurrentContent] = useState([]);    
    const[finalAnimation, setFinalAnimation] = useState("");    
    const[finalProps, setFinalProps] = useState("");    
    const[isFinalAnimation, setIsFinalAnimation] = useState(0);
    let i = 0;
    
    
    const loadLine = line => {
        setCurrentContent( prev => [...prev, line])
    }
    
    const loadLines = () => {

        let Linesinterval = setInterval(async() => {
            console.log(currentContent);
            // console.log(totalContent[i]);
            loadLine(totalContent[i]);
            i++;
            if(i >= totalContent.length){
                clearInterval(Linesinterval);
                //After loadLines, the next animation is written here
                var timeOut = setTimeout(() => {
                    clearTimeout(timeOut);
                    console.log("next animation");
                    setFinalAnimation(Final)
                    var timeOut2 = setTimeout( () => {
                        clearTimeout(timeOut2);
                        setIsFinalAnimation(1);
                        setFinalProps(<div></div>);
                    }, AnimationDelay)

                }, AnimationDelay);
            }
        }, AnimationDelay);
    }

    const AnimateIntroTv = async() => {
        setCurrentContent([])
        loadLines(); //Next effect after loadLines is called in the callback of setInterval written in loadLines
    }

    useEffect(() => {
        AnimateIntroTv();

        return( () => {

        })
    }, [])
    

    return (
        <div className={(isFinalAnimation === 1)? Style.introTv + " " + Style.finalAnimation : Style.introTv}>
            <div className={Style.menuBar}>
                <div className={Style.circle + " " + Style.Red} ></div>
                <div className={Style.circle + " " + Style.Yellow}></div>
                <div className={Style.circle + " " + Style.Green}></div>
            </div>
            <div className={Style.content}>
                {currentContent.map( line => 
                    <div key={line}>
                        <Typewriter className= {Style.contentLine} words={[line]}/>
                    </div>
                
                )}
                {finalAnimation}
                {finalProps}
            </div>
        </div>
    )
}

export default IntroTv