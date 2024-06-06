import { memo } from 'react'
import style from './marketing.module.scss'
import Gift from './icon/gift.svg'

const Marketing = () => {

    return <div className={style.container}>
        <p className={style.title}>Учитесь бесплатно</p>
        <p className={style.text}>Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!</p>
        <button className={style.btn}>Узнать</button>
        <Gift />
    </div>
}

export default memo(Marketing)