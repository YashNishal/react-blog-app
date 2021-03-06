import React from "react";
import { motion } from "framer-motion";

const icon = {
    hidden: {
        opacity: 0.5,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0.5)",
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)",
    }
}


export const NavIcon = () => {
        const animationTime = 1;
        
        return(
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <motion.path
                d="M39,28c0,8.395-6.606,15-15.001,15S9,36.395,9,28S22.479,12.6,20.959,5C24,5,39,15.841,39,28z"
                variants= {{
                    ...icon,
                    visible : {
                        ...icon.visible, 
                        fill : "#DD2C00"
                    } 
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: animationTime, ease: "easeInOut" },
                    fill: { duration: animationTime, ease: "easeInOut" },
                }}
            />
            <motion.path
                
                d="M33,32c0-7.599-9-15-9-15c0,6.08-9,8.921-9,15c0,5.036,3.963,9,9,9S33,37.036,33,32z"
                variants= {{
                    ...icon,
                    visible : {
                        ...icon.visible, 
                        fill : "#FF5722"
                    } 
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: animationTime, ease: "easeInOut" },
                    fill: { duration: animationTime,ease: "easeInOut"},
                }}
            />
            <motion.path
                d="M18.999,35.406C19,32,24,30.051,24,27c0,0,4.999,3.832,4.999,8.406c0,2.525-2.237,4.574-5,4.574S18.998,37.932,18.999,35.406z"
                variants= {{
                    ...icon,
                    visible : {
                        ...icon.visible, 
                        fill : "#FFC107"
                    } 
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: animationTime, ease: "easeInOut" },
                    fill: { duration: animationTime,ease: "easeInOut" },
                }}
            />
        </motion.svg>
        )
};