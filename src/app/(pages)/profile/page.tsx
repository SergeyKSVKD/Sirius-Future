'use client'

import { memo, useLayoutEffect, useState } from 'react'
import styles from './profile.module.scss'
import cn from 'classnames'
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { redirect } from 'next/navigation'
import Navigation from './components/navigation/Navigation';
import Hello from './components/hello/Hello';
import Main from './components/main/Main';

const Profile = () => {
    const isAuth = useSelector((state: RootState) => state.AppState.isAuth)
    const [user, setUser] = useState('')

    useLayoutEffect(() => {
      const actual = window.localStorage.getItem('user')
      setUser(actual ? actual : '')
      if (!actual) {
        redirect('/login')
    }
    }, [])

    return user ? <div className={styles.container}>
        <Navigation />
        <Hello />
        <Main />
    </div> : <></>
}

export default memo(Profile)