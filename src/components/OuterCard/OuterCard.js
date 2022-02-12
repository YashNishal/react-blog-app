import React from 'react'
import s from './OuterCard.module.css'

export default function OuterCard(props) {
  return (
    <div className={s.main}>{props.children}</div>
  )
}
