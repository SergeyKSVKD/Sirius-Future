import { memo } from 'react'
import styles from './reports.module.scss'
import Lessons from './icon/reports.svg'
import Tasks from './icon/tasks.svg'

const Reports = () => {

    return <div className={styles.container}>
        <div className={styles.tasks_container}>
            <p className={styles.title}>Домашние задания</p>
            <Tasks />
        </div>
        <div className={styles.reports_container}>
            <p className={styles.title}>Отчеты от учителей</p>
            <Lessons />
        </div>
    </div>
}

export default memo(Reports)