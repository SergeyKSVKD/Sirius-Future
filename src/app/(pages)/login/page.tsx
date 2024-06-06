import { memo } from 'react';
import styles from './login.module.scss'
import type { Metadata } from "next";
import Form from './Form';
import StoreLayout from '@/app/store/StoreLayout';

export const metadata: Metadata = {
  title: "Вход в Sirius Future",
}

const Login = () => {

  return (
    <StoreLayout>
      <section className={styles.container}>
        <Form />
      </section>
    </StoreLayout>
  )
}

export default memo(Login)