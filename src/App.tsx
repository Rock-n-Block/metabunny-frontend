import { LandingPage } from './pages/index';
import Header from './components/sections/Header/index';
import Footer from './components/sections/Footer/index';
import { animate } from './utils/animate';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
