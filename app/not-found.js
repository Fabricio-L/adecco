import { IconHome, IconMoodSadSquint } from '@tabler/icons-react'
import Link from 'next/link'
import styles from './page.module.css'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.error}>
        <h1>404 - Not Found</h1>
        <IconMoodSadSquint color="#A7A7A7" size={48} />
      </div>
      <h3>Could not find requested resource</h3>
      <div className={styles.error}>
        <h3>Go to</h3>
        <Link href="/" replace>
          <IconHome />
          Home
        </Link>
      </div>
    </main>
  )
}
