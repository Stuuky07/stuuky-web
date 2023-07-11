import Button from '@/components/Button/Button';
import styles from './page.module.scss';
import Title from '@/components/Title/Title';
import Link from 'next/link';

export default function homePage() {
  return (
    <main className={styles.main}>
      <div>
        <Title name='title' id='title' h1='STUUKY'/>
        <Button name='btn' id='btn' value='Próximo'/>
        <div>
          <Link href="/signup">SIGNUP</Link>
          <Link href="/login">LOGIN</Link>
        </div>
      </div>
    </main>
  );
}
