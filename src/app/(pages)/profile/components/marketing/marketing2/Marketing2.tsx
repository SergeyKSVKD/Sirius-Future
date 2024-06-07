import { memo } from 'react'
import styles from './marketing2.module.scss'
import SF from './icon/SF_2 1.svg'

const Marketing2 = () => {

    return <div className={styles.container}>
        <p className={styles.title}>До 31 декабря любой курс со скидкой 20%</p>
        <p className={styles.subtitle}>До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!</p>
        <div className={styles.sf_container}>
            <SF />
        </div>
    </div>
}

export default memo(Marketing2)