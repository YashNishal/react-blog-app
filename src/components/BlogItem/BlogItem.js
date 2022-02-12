import React from "react";
import s from './BlogItem.module.css'

export default function BlogItem(props) {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>{props.title}</div>
            <div className={s.desc}>{props.desc}</div>
            <div className={s.author}>- {props.author}</div>
        </div>
    );
}
