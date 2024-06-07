'use client'

import styles from './hello.module.scss'
import { memo, useState } from 'react'
import cn from 'classnames'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { resetApp } from '../../../../store/app-slice'
import Image from 'next/image';
import Messages from './images/messages.svg'
import Arrow from './images/arrow.svg'
import Exit from './images/exit.svg'
import Close from './images/close.svg'
import Triangle from './images/triangle.svg'
import { useRouter } from 'next/navigation';

const Hello = () => {
    const [isVisibleMenu, setVisibleMenu] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const isAuth = useSelector((state: RootState) => state.AppState.isAuth)
    const profile = useSelector((state: RootState) => state.AppState.profile)
    const user = localStorage.getItem('user')
    const avatar = localStorage.getItem('avatar')

    return <section className={styles.container}>
        <span className={styles.hello}>Добро пожаловать,
            <span className={styles.name}>{profile.name ? profile.name : user?.slice(1, user.length - 1)}</span>
            !</span>
        <div className={styles.icon_container}>
            <div className={styles.messages}>
                <div className={styles.count}>
                    2
                </div>
                <Messages />
            </div>
            <Image src={profile.avatar ? profile.avatar : avatar ? avatar.slice(1, avatar.length - 1) : ''} alt='avatar' width={42} height={42} style={{
                borderRadius: '50%',
                border: '0.1rem solid #7362BC'
            }} onClick={() => setVisibleMenu(!isVisibleMenu)} />
            <span onClick={() => setVisibleMenu(!isVisibleMenu)} className={cn({
                [styles.rotate]: isVisibleMenu
            })}>
                <Arrow />
            </span>
            {isVisibleMenu ?
                <div className={styles.profile_container}>
                    <span className={styles.polygon}>
                        <Triangle />
                    </span>
                    <span className={styles.close} onClick={() => setVisibleMenu(false)}>
                        <Close />
                    </span>
                    <p className={styles.title}>Смена пользователя</p>
                    <div className={styles.users}>
                        <div className={styles.user}>
                            <Image src={profile.avatar ? profile.avatar : avatar ? avatar.slice(1, avatar.length - 1) : ''} alt='avatar' width={32} height={32} style={{
                                borderRadius: '50%',
                                border: '0.1rem solid #7362BC'
                            }} />
                            <div>
                                <span className={styles.username}>{profile.name ? profile.name : user?.slice(1, user.length - 1)}</span>
                                <p>Это вы</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.exit_container}>
                        <p onClick={() => {
                            localStorage.removeItem('user')
                            localStorage.removeItem('avatar')
                            dispatch(resetApp())
                            router.push('/login')
                        }}>Выход</p>
                        <Exit onClick={() => {
                            localStorage.removeItem('user')
                            localStorage.removeItem('avatar')
                            dispatch(resetApp())
                            router.push('/login')
                        }} />
                    </div>
                </div> : null}
        </div>
    </section>
}

export default memo(Hello)