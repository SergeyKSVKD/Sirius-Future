import { memo } from 'react';
import styles from './login.module.scss'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход в Sirius Future",
};
const Login = () => {
  return (
    <div>
        Login
    </div>
  );
}

export default memo(Login)