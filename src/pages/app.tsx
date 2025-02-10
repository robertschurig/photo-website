import { Modal2 } from '../components';
import { Header } from '../components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './app.module.css';
import { Home } from './home';
import { Contact } from './contact';
import { Portrait } from './portrait';
import { Art } from './art';

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
