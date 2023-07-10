import Button from '@/components/Button/Button';
import styles from './page.module.scss';
import Title from '@/components/Title/Title';

export default function homePage() {
  return (
    <main className={styles.main}>
      <div>
        <Title name='title' id='title' h1='STUUKY'/>
        <Button name='btn' id='btn' value='Próximo'/>
      </div>
    </main>
  );
}
