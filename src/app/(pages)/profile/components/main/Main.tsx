'use client'

import React, { memo } from 'react'
import styles from './main.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import Marketing2 from '../marketing/marketing2/Marketing2';
import NextLesson from '../home/next_lesson/NextLesson';
import Reports from '../home/reports/Reports';
import Balance from '../home/balance/Balance';
import Upcoming from '../home/upcoming/Upcoming';

const M1 = () => {

    return <div className={styles.container}>
        <div className={styles.section_1}>
            <Marketing2 />
            <NextLesson />
            <Reports />
        </div>
        <div className={styles.section_2}>
            <Balance />
            <Upcoming />
        </div>
    </div>
}
const M2 = () => {

    return <div className={styles.container}>Расписание</div>
}
const M3 = () => {

    return <div className={styles.container}>Оплата</div>
}
const M4 = () => {

    return <div className={styles.container}>Достижения</div>
}
const M5 = () => {

    return <div className={styles.container}>Тренажеры</div>
}
const M6 = () => {

    return <div className={styles.container}>Библиотека</div>
}
const M7 = () => {

    return <div className={styles.container}>Проверка связи</div>
}
const M8 = () => {

    return <div className={styles.container}>Настройки</div>
}
const M9 = () => {

    return <div className={styles.container}>Вопросы</div>
}

const Main = () => {
    const dispatch = useDispatch<AppDispatch>()
    const module = useSelector((state: RootState) => state.AppState.module)

    return <section>
        {module === 'Главная' && React.createElement(M1)}
        {module === 'Расписание' && React.createElement(M2)}
        {module === 'Оплата' && React.createElement(M3)}
        {module === 'Достижения' && React.createElement(M4)}
        {module === 'Тренажеры' && React.createElement(M5)}
        {module === 'Библиотека' && React.createElement(M6)}
        {module === 'Проверка связи' && React.createElement(M7)}
        {module === 'Настройки' && React.createElement(M8)}
        {module === 'Вопросы' && React.createElement(M9)}
    </section>
}

export default memo(Main)