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
    const meta = {
      description: "This is the description of your website",
      site_name: title,
      type:"This is the type of your website",
      image:"" ,
      url:"" ,
      twitter_profile: "",
      creator: ""
    }
    return (
      <Wrapper>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content={meta.site_name} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:type" content={meta.type} />
          <meta property="og:image" content={meta.image} />
          <meta property="og:url" content={meta} />
          <meta name="twitter:card" content={meta.description} />
          <meta name="twitter:site" content={meta.twitter_profile} />
          <meta name="twitter:creator" content={meta.creator} />
        </Helmet>
        />
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
