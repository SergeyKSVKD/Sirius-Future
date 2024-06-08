'use client'

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { redirect } from 'next/navigation'
import { useLayoutEffect, useState } from "react";

export default function IsAuth() {
  const isAuth = useSelector((state: RootState) => state.AppState.isAuth)

  useLayoutEffect(() => {
    const user = window.localStorage.getItem('user')
    if (isAuth || user) {
      redirect('/profile')
    }
    if (!isAuth || !user) {
      redirect('/login')
    }
  }, [])

  return (
    <></>
  );
}