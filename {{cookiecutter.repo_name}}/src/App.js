import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Meta from './components/Meta';

import routes from './routes';

import Error from './views/Error';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Grid from './components/Grid';
import Column from './components/Column';
import Footer from './components/Footer';

class App extends Component {

  render() {

    const meta = {
      description: '{{ cookiecutter.description }}',
      type: "PLEASE CHANGE THIS TO: website name",
      image: "PLEASE CHANGE THIS TO: featured image",
      url: "PLEASE CHANGE THIS TO: featured url" ,
      twitter_profile: "PLEASE CHANGE THIS TO: featured profile",
      creator: "PLEASE CHANGE THIS TO: creator of featured content"
    };

    return (
      <Wrapper>
        <Meta {...meta} />
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
