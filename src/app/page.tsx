import Button from '@/components/Button/Button';
import styles from './page.module.scss';
import Title from '@/components/Title/Title';

export default function homePage() {
  return (
    <main className={styles.main}>
      <div>
        <h1>STUUKY</h1>
        <Button name='btn' id='btn' value='Entrar'/>
      </div>
    </main>
  );
}
