import React, {useState, useEffect} from 'react'
import Style from './IntroTv.module.css'
import { Typewriter } from 'react-simple-typewriter'
import Final from './final'

//This gives the animation delay
var AnimationDelay = 4000

function IntroTv() {

    //Add in this array to get lines
    const totalContent = [
        "We wanted to learn React.....",
        "We also wanted to do something crazy",
        "What did we do -->   -->   -->",
        "We created a Blog Page ofc ;)",
    ]



    const [currentContent, setCurrentContent] = useState([]);    
    const[finalAnimation, setFinalAnimation] = useState("");    
    const[finalProps, setFinalProps] = useState("");    
    const[isFinalAnimation, setIsFinalAnimation] = useState(0);
    let i = 1;
    
    let timeOut;
    let Linesinterval;
    
    const loadLine = line => {
        console.log(currentContent);
        setCurrentContent( prev => [...prev, line])
    }
    
    const loadLines = () => {

        Linesinterval = setInterval(async() => {
            loadLine(totalContent[i]);
            i++;
            if(i >= totalContent.length){
                clearInterval(Linesinterval);
                
                //After loadLines, the next animation is written here
                timeOut = setTimeout(() => {
                    clearTimeout(timeOut);
                    console.log("next animation");
                    setFinalAnimation(Final)
                    timeOut = setTimeout( () => {
                        clearTimeout(timeOut);
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
            clearTimeout(timeOut);
            clearInterval(Linesinterval);
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
                <div>
                    <Typewriter className= {Style.contentLine} words={[totalContent[0]]}/>
                </div>

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