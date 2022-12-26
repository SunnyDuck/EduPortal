import React from "react";
import s from './RegistrationPage.module.css'

const RegistrationPage = (props) => {

    let newTextName = React.createRef();
    let newTextSurname = React.createRef();
    let newTextPost = React.createRef();

    let addNewData = () => {
        let textName = newTextName.current.value;
        let textSurname = newTextSurname.current.value;
        let textPost = newTextPost.current.value;
        props.addNewName(textName);
        props.addNewSurname(textSurname);
        props.addNewPost(textPost);
    }

    return(
        <div className={s.registrPage}>
            <h1>РЕГИСТРАЦИЯ</h1>
            <div className={s.registrSettings}>
                <textarea ref={newTextName} placeholder='ИМЯ'></textarea>
                <textarea ref={newTextSurname} placeholder='ФАМИЛИЯ'></textarea>
                <textarea ref={newTextPost} placeholder='ДОЛЖНОСТЬ'></textarea>
                <button onClick={addNewData}>СОХРАНИТЬ</button>
            </div>
        </div>
    )
}

export default RegistrationPage