import React, { useState } from "react";
import s from "./BlogItem.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogItem(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.div className={s.wrapper} onClick={toggleOpen} layout>
            <motion.div className={s.title} layout>{props.title}</motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        layout
                        className={s.desc}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {props.desc} 
                        
                        {
                        //.substring(0,200) + (props.desc.length>200?"..." : ""}   
                        }
                        
                        {/* {
                            props.desc.length>200?<Link to={"/blog/"+props.id} >Read more</Link>:""
                        } */}
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div className={s.author} layout>- {props.author}</motion.div>
        </motion.div>
    );
}
