import React from "react";
import s from './Question.module.css'

const Question = (props) => {
    return(
        <div className={s.quest}>
            {props.quest}
            {props.answer}
        </div>
    )
}

export default Question