'use client'

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { redirect } from 'next/navigation'
import { useLayoutEffect } from "react";

export default function IsAuth() {
  const isAuth = useSelector((state: RootState) => state.AppState.isAuth)

  useLayoutEffect(() => {
      if (isAuth) {
          redirect('/profile')
      }
      if (!isAuth) {
        redirect('/login')
      }
  }
  )

  return (
      <></>
  );
}