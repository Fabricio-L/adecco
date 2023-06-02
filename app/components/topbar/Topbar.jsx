'use client'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import {
  IconMenu2,
  IconCircleX,
  IconLogin,
  IconLogout,
  IconUsers,
  IconPhoto,
} from '@tabler/icons-react'
import Link from 'next/link'
import styles from './Topbar.module.css'

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const session = useSession()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <header className={styles.container}>
      <button className={styles.menuButton} onClick={handleToggle}>
        <IconMenu2 size={36} />
      </button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.closeButton}>
          <button onClick={handleClose}>
            <IconCircleX size={36} />
          </button>
        </div>
        <div className={styles.section}>
          <h2 className={styles.subCategory}>Menu</h2>
          <ul className={styles.menu}>
            {session?.data?.user ? (
              <>
                <li className={styles.item} onClick={handleClose}>
                  <IconLogout size={24} color="#42C83C" />
                  <button onClick={() => signOut()}>Logout</button>
                </li>
                <li className={styles.item} onClick={handleClose}>
                  <IconUsers size={24} color="#42C83C" />
                  <Link href="/">Users</Link>
                </li>
                <li className={styles.item} onClick={handleClose}>
                  <IconPhoto size={24} color="#42C83C" />
                  <Link href="/albumns">Albumns</Link>
                </li>
              </>
            ) : (
              <li className={styles.item} onClick={handleClose}>
                <IconLogin size={24} color="#42C83C" />
                <Link href="/auth/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div
        className={`${isOpen ? styles.overlay : styles.close}`}
        onClick={handleClose}
      ></div>
      <Link href="/">
        <h1 className={styles.logo}>Prestalana</h1>
      </Link>
    </header>
  )
}

export default Topbar
