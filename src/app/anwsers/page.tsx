import styles from './page.module.scss'

import Title from '@/components/Title/Title'

export default function anwsers() {
 return(
  <div className={styles.main}>
   <Title name='title' h1='Respostas'/>
   <h1>Respostas</h1>
  </div>
 )
}