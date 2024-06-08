import { memo } from 'react'
import styles from './balance.module.scss'

const lessons = [
    { lesson: 'Ментальная Арифметика', count: '32' },
    { lesson: 'Программирование', count: '0' },
    { lesson: 'Скорочтение', count: '4' },
]

const Balance = () => {

    return <div className={styles.container}>
        <p className={styles.title}>Баланс занятий</p>
        <div className={styles.lessons}>
            {lessons.map((lesson, index) => {

                return <>
                    <div className={styles.lesson}>
                        <p className={styles.name}>{lesson.lesson}</p>
                        <p className={styles.count}>{lesson.count}</p>
                    </div>
                    {index === 2 ? '' :
                        <div className={styles.divider} />}
                </>
            })}
            <button className={styles.btn}>Button</button>
        </div>
    </div>
}

export default memo(Balance)