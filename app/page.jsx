import Showcase from './components/showcase/Showcase'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Showcase />
    </main>
  )
}
