import React from "react";
import s from "./Card.module.css";

export default function Card(props) {
    return (
        <div className={props.dummy ? s.dummy : s.card}  >
            {props.children}
        </div>
    );
}
