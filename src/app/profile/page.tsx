import styles from './page.module.scss'

import Title from '@/components/Title/Title'

export default function profile() {
 return(
  <div className={styles.main}>
   <Title name='title' h1='Perfil'/>
  </div>
 )
}