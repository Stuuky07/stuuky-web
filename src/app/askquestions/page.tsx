import styles from './page.module.scss'

import Title from '@/components/Title/Title'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'

export default function askquestions() {
  return (
    <main className={styles.main}>
      <div>
        <Title name='title' h1='Perguntas'/>
        <Input name='title' placeholder='Título da pergunta'/>
        <Input name='description' placeholder='Descrição da pergunta'/>
        <Button name='btn' id='btn' value='Enviar'/>
      </div>
    </main>
  )
}