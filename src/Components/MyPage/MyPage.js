import React from "react";
import s from './MyPage.module.css'

const MyPage = (props) => {
    return(
        <div className={s.pageWrapper}>
            <div className={s.contentBoard}>
            </div>
            <div className={s.avatar}>
                <img src='https://img.freepik.com/free-psd/3d-illustration-of-bald-person-with-glasses_23-2149436184.jpg?w=1380&t=st=1671687848~exp=1671688448~hmac=5326b90eb939383b9eca42e1e7e78de7b60023a054e5060a9bbcdb57a1acfd8b'/>
            </div>
            <div className={s.description}>
                <p>Имя: {props.Name}</p>
                <p>Фамилия: {props.SurName}</p>
                <p>Должность: {props.YourPost}</p>
            </div>
            <div className={s.progress}>
                <p>Прогресс: {props.Progress}</p>
                <p>Решеные задачи: {props.DoneTask}</p>
                <p>Пройденные темы: {props.DoneTheme}</p>
            </div>
        </div>
    )
}

export default MyPage