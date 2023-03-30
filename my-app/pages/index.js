import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <img src='https://i.ibb.co/17JXpbw/matchmakr-high-resolution-logo-color-on-transparent-background.png'></img>
     <Link href='/employee' className='employee-button'>Employee</Link> 
     <Link href='/employer'>Employer</Link> 
    </>
  )
}
