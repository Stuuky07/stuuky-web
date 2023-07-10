import Input from '@/components/Input/Input'
import styles from './page.module.scss'

export default function signUp() {
  return (
    <main className={styles.main}>
    <div>
      <Input name='username' placeholder='Digite seu username'/>
      <Input name='email' placeholder='Digite seu email'/>
      <Input name='password' type='password' placeholder='Digite sua senha'/>
    </div>
    </main>
  )
}
