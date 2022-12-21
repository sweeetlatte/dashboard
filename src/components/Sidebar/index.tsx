import { useState } from 'react';
import { Link } from 'react-router-dom';

import ThemeToggle from '../ThemeToggle';
import { Pages } from './pages';
import { Sections } from './sections';
import styles from './styles.module.scss';

export default function Sidebar() {
  const [indexSidebar, setIndexSidebar] = useState<number>(1);

  return (
    <>
      {Sections.map((section) => (
        <div key={section.id}>
          <div className={styles.sectionTitle}>{section.title}</div>
          {Pages.filter((page) => page.sectionId === section.id).map((page) => (
            <Link
              to={page.path}
              onClick={() => setIndexSidebar(page.id)}
              key={page.id}
              className={indexSidebar === page.id ? styles.pageActive : styles.page}
            >
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
