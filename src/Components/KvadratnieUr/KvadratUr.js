import React from "react";
import s from './KvadratUr.module.css'
import {NavLink} from "react-router-dom";

const KvadratUr = () => {
    return(
        <div className={s.kvadratUr}>
            <div className={s.Header}>
                <img src='https://img.freepik.com/free-vector/thinking-face-concept-illustration_114360-7944.jpg?w=1380&t=st=1671725874~exp=1671726474~hmac=be603eb7ab825c5f7402555e77995bc7e690a63b8bd1beafbf41a58801e1f5aa'/>
                <h1>КВАДРАТНЫЕ УРАВНЕНИЯ</h1>
                <img src='https://img.freepik.com/free-vector/critical-thinking-concept-illustration_114360-7942.jpg?w=1380&t=st=1671725604~exp=1671726204~hmac=03cf64e2438b2c86df6667c6e66d26be4e5ab64844ea93d95e1b54eaa56b81d7'/>
            </div>
            <div className={s.tableWrapper}>
                <div className={s.firTable}>
                    <p>Квадратным уравнением называется уравнение вида
                        𝒂𝒙^2 + 𝒃𝒙 + 𝒄 = 𝟎, 𝑎,𝑏,𝑐 ∈𝑅,𝑎≠0
                        Полное КУ – это квадратное уравнение, в котором присутствуют все три слагаемых. Неполное КУ – это квадратное уравнение, у которого хотя бы один из коэффициентов 𝑏 и с равен нулю.
                        Квадратное уравнение - приведённое, если старший коэффициент равен 1;
                        Квадратное уравнение - неприведённое, если старший коэффициент отличен от 1.</p>
                </div>
                <div className={s.secTable}>
                    <p>
                        Следующие уравнения являются квадратными уравнениями:
                        3𝑥^2 +8𝑥−7=0–полное неприведённое К.У
                        𝑥^2 + 5𝑥 = 0 – неполное приведенное К.У.
                        −𝑥^2 − 3𝑥 + 15 = 0 – полное неприведённое К.У.
                        5𝑥^2 = 0 – неполное неприведённое К.У.
                    </p>
                </div>
            </div>
            <div className={s.item}>
                <NavLink to='/trainkvadpage' className = { navData => navData.isActive ? s.active : s.item }>Тренировка</NavLink>
            </div>
        </div>
    )
}

export default KvadratUr
