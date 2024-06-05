'use client'
import { memo, useState } from 'react';
import styles from './login.module.scss'
import cn from 'classnames'
import type { Metadata } from "next";
import Image from 'next/image';
import Logo from '../../../../public/images/logo.png'
import Eye from '../../../../public/images/icons/eye.svg'
import OpenEye from '../../../../public/images/icons/open-eye.svg'
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: "Вход в Sirius Future",
// };
const Login = () => {
  const [lang, setLang] = useState<string>('RU')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <section className={styles.container}>
      <form>
        <Image src={Logo} alt='logo' />
        <p className={styles.title}>{lang === 'RU' ? 'Вход в Sirius Future' : 'Log in Sirius Future'}</p>
        <input className={styles.input} type="text" placeholder='E-mail' />
        <div className={styles.password}>
          <input className={styles.input} type={
            showPassword ? 'text' : 'password'
          } placeholder={lang === 'RU' ? 'Пароль' : 'Password'} />
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
      <ul className={styles.lang_container}>
        <li className={cn({
          [styles.active]: lang === 'RU'
        }
        )} onClick={() => setLang('RU')}>RU</li>
        <li className={cn({
          [styles.active]: lang === 'EN'
        }
        )} onClick={() => setLang('EN')}>EN</li>
      </ul>
    </section>
  )
}

export default memo(Login)