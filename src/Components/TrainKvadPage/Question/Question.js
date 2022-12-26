import React from "react";
import s from './Question.module.css'

const Question = (props) => {

    let changeColor = (answ) => {
        if(props.answer === answ){
            props.colorReplace(props.id, 'green', answ, 1);
        }
        else{
            props.colorReplace(props.id, 'red', answ, 0);
        }
    }

    return(
        <div className={s.quest}>
            {props.quest}
            <button id={props.id+'Y'} style={{backgroundColor: props.btnColorY}} onClick={() => changeColor('Yes')}>Да</button>
            <button id={props.id+'N'} style={{backgroundColor: props.btnColorN}} onClick={() => changeColor('No')}>Нет</button>
        </div>
    )
}

export default Question