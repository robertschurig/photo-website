import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Contact, Home, Portraits, Sports } from 'pages';
import { Header } from 'components/header';
import styles from './app.module.css';

export const App = () => (
  <BrowserRouter>
    <div className={styles.container}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
