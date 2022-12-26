import React from "react";
import s from './EducationPage.module.css'
import {NavLink} from "react-router-dom";

const EducationPage = () => {
    return(
        <div className={s.eduPage}>
            <h1>ВЫБЕРИТЕ ТЕМУ ДЛЯ ИЗУЧЕНИЯ</h1>
            <div className={s.item}>
                <NavLink to='/kvadratnie' className = { navData => navData.isActive ? s.active : s.item }>Квадратные уравнения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/bikvadratnie' className = { navData => navData.isActive ? s.active : s.item }>Биквадратные уравнения</NavLink>
            </div>
        </div>
    )
}

export default EducationPage