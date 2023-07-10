import styles from './page.module.scss'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'

export default function login() {
  return (
    <main className={styles.main}>
      <div>
        <Input name='email' placeholder='Digite seu email'/>
        <Input name='password' type='password' placeholder='Digite sua senha'/>
        <Button name='btn' id='btn' value='Entrar'/>
      </div>
    </main>
  )
}