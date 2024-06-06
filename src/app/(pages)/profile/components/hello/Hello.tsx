'use client'

import styles from './hello.module.scss'
import { memo } from 'react'
import cn from 'classnames'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import Image from 'next/image';

const Hello = () => {
    const dispatch = useDispatch<AppDispatch>()
    const isAuth = useSelector((state: RootState) => state.AppState.isAuth)
    const profile = useSelector((state: RootState) => state.AppState.profile)
    const user = localStorage.getItem('user')
    const avatar = localStorage.getItem('avatar')

    return <section className={styles.container}>
        <p>{`Добро пожаловать, ${profile.name ? profile.name : user?.slice(1, user.length - 1)}!`}</p>
        <Image src={profile.avatar ? profile.avatar : avatar ? avatar.slice(1, avatar.length - 1) : ''} alt='avatar' width={42} height={42} style={{
            borderRadius: '50%'
        }} />
    </section>
}

export default memo(Hello)