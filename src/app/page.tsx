import Button from '@/components/Button/Button';
import styles from './page.module.scss';
import Title from '@/components/Title/Title';
import Link from 'next/link';
import Ball from '@/components/Saturn/Ball/Ball';

export default function homePage() {
  return (
    <main className={styles.main}>
      <div>
       <Ball name='ball'/>
      </div>
    </main>
  );
}
