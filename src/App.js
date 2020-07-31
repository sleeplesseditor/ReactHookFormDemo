import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';
import Header from './components/Header/Header';

const FormPage = React.lazy(() => import('./pages/FormPage/FormPage'));

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LazyLoader(FormPage)} />
      </Switch>
    </Router>
  )
}

export default App;
