import React from "react";
import s from './TrainKvadPage.module.css'
import Question from "./Question/Question";

const TrainKvadPage = (props) => {

    let question = props.state.questions.map( d=> <Question
        quest={d.question}
        answer={d.answer}
        id={d.id}
        btnColorY={d.btnColorY}
        btnColorN={d.btnColorN}
        colorReplace={props.colorReplace}
    />)


    return(
        <div className={s.kvadTrain}>
            <h1>Являются ли квадратными уравнения?</h1>
            <div>
                {question}
                <h1>Результаты тестирования: {props.state.results.trainKvadTest}</h1>
            </div>
        </div>
    )
}

export default TrainKvadPage