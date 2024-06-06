'use client'

import { memo, useState } from 'react';
import styles from './login.module.scss'
import cn from 'classnames'
import Image from 'next/image';
import Logo from '../../../../public/images/logo.png'
import Eye from '../../../../public/images/icons/eye.svg'
import OpenEye from '../../../../public/images/icons/open-eye.svg'
import Link from 'next/link';
import { useRouter } from 'next/navigation'

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { changeLang, changeIsAuth, setProfile } from '../../store/app-slice'

type ResT = {
    status: string,
    name: string
}


const Form = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [res, setRes] = useState<ResT>({
        status: '',
        name: '',
    })

    const dispatch = useDispatch<AppDispatch>()
    const lang = useSelector((state: RootState) => state.AppState.lang)
    const router = useRouter()

    function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }

    function handlePass(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const data = {
            email: email,
            password: password,
        }

        const JSONdata = JSON.stringify(data)

        const endpoint = '/api/auth'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)
        const result = await response.json()
        
        if (result.status !== 'успех') {
            setRes(result)
        }
        if (result.status === 'успех') {
            setEmail('')
            setPassword('')
            setRes({
                status: '',
                name: '',
            })
            dispatch(changeIsAuth(true))
            dispatch(setProfile({
                name: result.name,
                avatar: result.avatar,
            }))
            router.push('/profile')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Image src={Logo} alt='logo' />
                <p className={styles.title}>{lang === 'RU' ? 'Вход в Sirius Future' : 'Log in Sirius Future'}</p>
                <input className={styles.input} type="text" placeholder='E-mail' value={email} onChange={handleEmail}/>
                <div className={styles.password}>
                    <input className={styles.input} type={
                        showPassword ? 'text' : 'password'
                    } placeholder={lang === 'RU' ? 'Пароль' : 'Password'} value={password} onChange={handlePass}/>
                    {showPassword ?
                        <OpenEye onClick={() => {
                            setShowPassword(!showPassword)
                        }} /> :
                        <Eye onClick={() => {
                            setShowPassword(!showPassword)
                        }} />
                    }
                </div>
                <div className={styles.remember_me}>
                    <input className={styles.checkbox} type="checkbox" id="Remember me" />
                    <label htmlFor="Remember me" />
                    <p>{lang === 'RU' ? 'Запомнить меня' : 'Remember me'}</p>
                </div>
                <button className={styles.login}>
                    {lang === 'RU' ? 'Войти' : 'Log in'}
                </button>
                <div className={styles.btn_container}>
                    <Link href={'/'}>{lang === 'RU' ? 'Я забыл пароль' : 'Forgot password'}</Link>
                    <Link href={'/'}>{lang === 'RU' ? 'Войти как тренер' : 'Log in as a coach'}</Link>
                </div>
                <div className={styles.signup}>
                    <p>{lang === 'RU' ? 'Нет аккаунта?' : 'Don`t have an account?'}</p>
                    <Link href={'https://kz.siriusfuture.com/'} target='_blanc'>{lang === 'RU' ? 'Зарегистрироваться' : 'Sign up'}</Link>
                </div>
            </form>
            {
                res ? <p className={styles.error}>{res.status}</p> : null
            }
            <ul className={styles.lang_container}>
                <li className={cn({
                    [styles.active]: lang === 'RU'
                }
                )} onClick={() => dispatch(changeLang('RU'))}>RU</li>
                <li className={cn({
                    [styles.active]: lang === 'EN'
                }
                )} onClick={() => dispatch(changeLang('EN'))}>EN</li>
            </ul>
        </>
    )
}

export default memo(Form)