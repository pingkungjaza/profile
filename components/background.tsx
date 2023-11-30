'use client'
import { useTheme } from 'next-themes';
import React from 'react'

const Background = () => {
  const { theme } = useTheme();
  return (
    <div className={`fixed w-[100vw] h-[100vh] grayscale-[${theme === 'light' ? '10%' : '90%'}] bg-cover bg-[url('/images/background.jpg')]`}>
    </div>

  )
}

export default Background