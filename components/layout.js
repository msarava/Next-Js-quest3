import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.css';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/vercel.svg' />
      </Head>
      <header className={styles.header}>
        <div className={styles.title}>
          <Link href='/'>My Next JS site</Link>
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuItems}>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li className={styles.menuItems}>
            <Link href='/terms'>
              <a>Terms of use</a>
            </Link>
          </li>
        </ul>
      </header>
      {children}
      <footer className={styles.footer}>© Wild Code School 2022</footer>
    </div>
  );
}
