import { memo } from 'react'
import styles from './next_lesson.module.scss'

const NextLesson = () => {

    return <div className={styles.container}>
        <p className={styles.title}>Следующее занятие начнется через:</p>
        <p className={styles.timer}>
            <div>
                <span className={styles.number}>6</span>
                <span className={styles.text}>д</span>
            </div>
            <div>
                <span className={styles.number}>12</span>
                <span className={styles.text}>ч</span>
            </div>
            <div>
                <span className={styles.number}>24</span>
                <span className={styles.text}>мин</span>
            </div>
        </p>
        <button className={styles.btn}>Button</button>
    </div>
}

export default memo(NextLesson)