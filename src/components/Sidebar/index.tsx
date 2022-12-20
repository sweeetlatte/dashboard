import React from 'react';
import { Link } from 'react-router-dom';

import ThemeToggle from '../ThemeToggle';
import { Pages } from './pages';
import { Sections } from './sections';
import styles from './styles.module.scss';

export default function Sidebar() {
  return (
    <>
      {Sections.map((section) => (
        <div key={section.id}>
          <div className={styles.sectionTitle}>{section.title}</div>
          {Pages.filter((page) => page.sectionId === section.id).map((page) => (
            <Link to={page.path} key={page.id} className={styles.page}>
              {page.icon}
              <div>{page.title}</div>
            </Link>
          ))}
        </div>
      ))}
      <ThemeToggle />
    </>
  );
}
