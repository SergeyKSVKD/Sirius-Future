import { memo } from 'react'
import styles from './upcoming.module.scss'
import cn from 'classnames'
import User from './icon/user.svg'

const lessons = [
    { number: '1', month: 'мая', lesson: 'Ментальная Арифметика', time: '14:00-14:25', teacher: 'Белкина Инна' },
    { number: '30', month: 'октября', lesson: 'Программирование', time: '11:00-11:11', teacher: 'Животновская Оксана' },
    { number: '16', month: 'ноября', lesson: 'Скорочтение', time: '09:00-09:45', teacher: 'Мин Елена' },
]

const Upcoming = () => {

    return <div className={styles.container}>
        <p className={styles.title}>Ближайшие уроки</p>
        <div className={styles.lessons}>
            {lessons.map((lesson, index) => {

                return <>
                    <div className={styles.lesson}>
                        <div className={styles.date}>
                            <p className={styles.number}>{lesson.number}</p>
                            <p className={styles.mounth}>{lesson.month}</p>
                        </div>
                        <p className={styles.name}>{lesson.lesson}</p>
                        <p className={styles.time}>{lesson.time}</p>
                        <div className={styles.teacher}>
                            <User />
                            <p className={styles.name}>{lesson.teacher}</p>
                        </div>
                        <div className={styles.btn_container}>
                            <button className={cn(styles.btn1, {
                                [styles.inactive]: index === 0
                            })}>Button</button>
                            <button className={styles.btn2}>Button</button>
                        </div>
                    </div>
                    {index === 2 ? '' :
                        <div className={styles.divider} />}
                </>
            })}
            <button className={styles.btn}>Button</button>
        </div>
    </div>
}

export default memo(Upcoming)