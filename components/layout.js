import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Post</title>
        <link rel='icon' href='/favicon.ico' />
        <meta></meta>
      </Head>
      <header className={styles.header}>
        <div className={styles.title}>
          <Link href='/'>My Next JS site</Link>
        </div>
        <ul className={styles.menuList}>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
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
