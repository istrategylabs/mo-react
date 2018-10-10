import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import routes from './routes';

import Error from './views/Error';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Grid from './components/Grid';
import Column from './components/Column';
import Footer from './components/Footer';

const title = '{{ cookiecutter.project_name }}';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet titleTemplate={`%s - ${title}`} />
        <div>
          <Header />
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
            <Route component={Error} />
          </Switch>
        </div>
        <Footer>
          <Grid>
            <Column width={12}>
              &copy; 2018
            </Column>
          </Grid>
        </Footer>
      </Wrapper>
    );
  }
};

export default App;
