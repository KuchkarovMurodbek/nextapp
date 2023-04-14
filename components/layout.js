import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';

import Link from 'next/link';

const name = 'Murod';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children}) {
  return (
    <div className={styles.container}>
   
   
     {children}
    </div>
  );
}