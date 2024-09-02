import React from 'react';
import Link from 'next/link';
import styles from './MenueBar.module.css';

const MenueBar = () => {
  return (
    <nav className={styles.navMenu}>
      <Link href="/OpenTickets" className={styles.link}>Open Tickets</Link>
      <Link href="/ClosedTickets" className={styles.link}>Closed Tickets</Link>
      <Link href="/CreateTicket" className={styles.link}>Create Ticket</Link>
      <Link href="/FAQ" className={styles.link}>FAQ</Link>
      <Link href="/SLA" className={styles.link}>SLA</Link>
      <div className={styles.dot}></div>
    </nav>
  );
};

export default MenueBar;
