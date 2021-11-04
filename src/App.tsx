import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/sections/Footer/index';
import Header from './components/sections/Header/index';
import { LandingPage } from './pages/index';
import { animate } from './utils/animate';

animate({ className: '.anim', animClassName: 'anim_active' });

export const App: React.FC = () => {
  return (
    <Router>
      <Route path="/">
        <div className="app">
          <Header />
          <LandingPage />
          <Footer />
        </div>
      </Route>
      <div className="app-modals" />
    </Router>
  );
};
