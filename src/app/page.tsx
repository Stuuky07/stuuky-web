import Button from '@/components/Button/Button';
import styles from './page.module.scss';
import Title from '@/components/Title/Title';

export default function homePage() {
  return (
    <main className={styles.main}>
      <div>
        <Title name='title' h1='STUUKY'/>
        <Button name='button' value='Entrar'/>
      </div>
    </main>
  );
}
