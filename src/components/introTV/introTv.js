import React, {useState, useEffect} from 'react'
import Style from './IntroTv.module.css'

function IntroTv() {

    const [currentContent, setCurrentContent] = useState([]);

    const totalContent = [
        "First line",
        "Second line",
        "Third line",
    ]

    const loadLine = line => {
        let i = 0;
        let n = line.length;
        let lineInterval = setInterval(() => {
            setCurrentContent( (prevContent) => [...prevContent, line])

        })
    }

    const loadLines = () => {
        let i = 0;
        let n = totalContent.length;

        let Linesinterval = setInterval(() => {
            console.log(totalContent[i]);

            loadLine(totalContent[i]);
            i++;
            if(i >= n)clearTimeout(Linesinterval);
        }, 2000);
    }

    useEffect(() => {
        setCurrentContent([])
        loadLines();
    }, [])
    


    return (
        <div className={Style.introTv}>
            <div className={Style.menuBar}>
                <div className={Style.circle + " " + Style.Red} ></div>
                <div className={Style.circle + " " + Style.Yellow}></div>
                <div className={Style.circle + " " + Style.Green}></div>
            </div>
            <div className={Style.content}>
                {currentContent.map( line => <p key={line}>{line}</p>)}
            </div>
        </div>
    )
}

export default IntroTv