import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Contact, Home, Portraits, Sports } from 'pages';
import { Header } from 'components/header';
import styles from './app.module.css';

export const App = () => (
  <BrowserRouter>
    <div className={styles.container}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portraits" component={Portraits} />
          <Route exact path="/sports" component={Sports} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);
