import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import styles from './page.module.scss'

export default function signUp() {
  return (
    <main className={styles.main}>
    <div>
      <Input name='username' placeholder='Digite seu username'/>
      <Input name='email' placeholder='Digite seu email'/>
      <Input name='password' type='password' placeholder='Digite sua senha'/>
      <Button name='btn' id='btn' value='Cadastrar'/>
    </div>
    </main>
  )
}
