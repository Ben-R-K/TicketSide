import React from 'react';
import Link from 'next/link';
import styles from './MenueBar.module.css';

const MenueBar = () => {
  return (
    <nav className={styles.navMenu}>
      <Link href="/OpenTickets" className={styles.link}>OpenTickets</Link>
      <Link href="/ClosedTickets" className={styles.link}>ClosedTickets</Link>
      <Link href="/CreateTicket" className={styles.link}>CreateTicket</Link>
      <Link href="/FAQ" className={styles.link}>FAQ</Link>
      <Link href="/SLA" className={styles.link}>SLA</Link>
      <div className={styles.dot}></div>
    </nav>
  );
};

export default MenueBar;
