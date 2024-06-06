'use client'

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { redirect } from 'next/navigation'
import { useLayoutEffect } from "react";

export default function IsAuth() {
  const isAuth = useSelector((state: RootState) => state.AppState.isAuth)
  const user = localStorage.getItem('user')

  useLayoutEffect(() => {
      if (isAuth || user) {
          redirect('/profile')
      }
      if (!isAuth || !user) {
        redirect('/login')
      }
  }
  )

  return (
      <></>
  );
}