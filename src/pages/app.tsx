import { Modal2 } from 'components';
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
          <Route path="/" element={<Home />}>
            <Route path=":id" element={<Modal2 />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/portrait" element={<Portrait />}>
            <Route path=":id" element={<Modal2 />} />
          </Route>
          <Route path="/art" element={<Art />}>
            <Route path=":id" element={<Modal2 />} />
          </Route>
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
