import List from '../components/list/List'
import styles from './page.module.css'

export default function Albumns() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Albums</h1>
      </section>
      <List />
    </main>
  )
}
