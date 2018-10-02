import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import Home from './views/Home';
import About from './views/About';
import Error from './views/Error';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Nav from './components/Nav';
import NavLink from './components/NavLink';

const title = '{{ cookiecutter.project_name }}';
const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  }, {
    title: 'About',
    path: '/about',
    component: About
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Helmet titleTemplate={`%s - ${title}`} />
          <Header>
            <Link to="/">
              <img className="logo" src="/images/logo.svg" alt="{{ cookiecutter.project_name }}" height="auto" width={210} />
            </Link>
            <Nav>
              <h1>Navigation</h1>
              {routes.map((route, i) => (
                <NavLink key={i} {...route} />
              ))}
            </Nav>
          </Header>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
            <Route component={Error} />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
};

export default App;
