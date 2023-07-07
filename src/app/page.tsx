import styles from './page.module.css'
import Button from '@/components/Button/Button'

export default function homePage() {
  return (
    <main className={styles.main}>
    <div>
      <h1>STUUKY</h1>
      <Button name='btn' value='Cadastrar'/>
    </div>
    </main>
  )
}
