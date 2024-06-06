'use client'

import { memo, useEffect, useLayoutEffect } from 'react'
import styles from './profile.module.scss'
import cn from 'classnames'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import Image from 'next/image';
import { redirect } from 'next/navigation'
import Navigation from './components/navigation/Navigation';

const Profile = () => {
    const dispatch = useDispatch<AppDispatch>()
    const isAuth = useSelector((state: RootState) => state.AppState.isAuth)
    const profile = useSelector((state: RootState) => state.AppState.profile)

    useLayoutEffect(() => {
        if (!isAuth) {
            redirect('/login')
        }
    })


    return isAuth ? <div className={styles.container}>
        <p>{`Добро пожаловать, ${profile.name}`}</p>
        <Image src={profile.avatar ? profile.avatar : ''} alt='avatar' width={42} height={42} style={{
            borderRadius: '50%'
        }}/>
        <Navigation />
    </div> : <></>
}

export default memo(Profile)