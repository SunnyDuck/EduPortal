import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/mypage' className = { navData => navData.isActive ? s.active : s.item }>Профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/educationpage' className = { navData => navData.isActive ? s.active : s.item }>Обучение</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/testpage' className = { navData => navData.isActive ? s.active : s.item }>Тесты</NavLink>
            </div>

        </nav>
    )
}

export default Navbar