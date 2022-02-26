import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import Home from './pages/Home';
import DynamicPage from './pages/DynamicPage';
import NoMatch from './pages/NoMatch';
import Loading from './pages/Loading';

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './pages/DynamicPage'),
  {
    LoadingComponent: Loading,
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './pages/NoMatch'),
  {
    LoadingComponent: Loading,
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dynamic" element={<DynamicPage />} />
          <Route element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
