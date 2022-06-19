import { Header } from 'components/header';
import { Contact, Home, Portrait, Art } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './app.module.css';

export const App = () => (
  <BrowserRouter>
    <div className={styles.container}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portrait" element={<Portrait />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
