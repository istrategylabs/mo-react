import React from 'react';
import Head from '../components/organisms/Head';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import Page from '../components/layouts/Page';
import Wrapper from '../components/atoms/Wrapper';
import Column from '../components/atoms/Column';
import Grid from '../components/atoms/Grid';

import { StyledH1 } from '../styles/text';

export default (props) => (
  <Wrapper>
    <Head title="Home" />
    <div>
      <Header />
      <Page>
        <StyledH1 data-testid="home-text">This is the <strong>Home</strong> view.</StyledH1>
        <p>Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus duis habitant maecenas sem interdum quisque duis mauris scelerisque scelerisque dui elit a condimentum vestibulum ad vestibulum. Laoreet nostra dui vivamus vestibulum integer taciti suscipit consectetur in a nullam quam nam ad nunc class nec ullamcorper urna sed nascetur ad.</p>
      </Page>
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
