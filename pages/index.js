import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Layout, { siteTitle } from '../components/layout';

export default function IndexPage() {
  useEffect(() => {
    console.log('index page did mount');
  }, []);

  return (
    <div>
      <Layout title='Home'>
        <p>Hello Wilder !</p>
        <Image
          src='/images/Wild-Code-School-logo.png'
          height={144}
          width={250}
          alt='logo school'
        />
      </Layout>
    </div>
  );
}
