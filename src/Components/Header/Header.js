import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <div className={s.AllHeader}>
            <header className={s.header}>
                <img src='https://img.freepik.com/free-vector/illustration-of-graduation-hat_53876-5920.jpg?w=1380&t=st=1671532143~exp=1671532743~hmac=850575011d339216cb194ce54d09870c5ff861a9bf272a8233fe377926f73237'/>
            </header>
            <div className={s.item}>
                <NavLink to='/registrpage' className = { navData => navData.isActive ? s.active : s.item }>Войти/Зарегистрироваться</NavLink>
            </div>
        </div>
    )
}

export default Header