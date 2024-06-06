import { memo } from 'react'
import styles from './marketing.module.scss'
import Gift from './icon/gift.svg'

const Marketing = () => {

    return <div className={styles.container}>
        <p className={styles.title}>Учитесь бесплатно</p>
        <p className={styles.text}>Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!</p>
        <button className={styles.btn}>Узнать</button>
        <div className={styles.gift_container}>
            <Gift />
        </div>
    </div>
}

export default memo(Marketing)