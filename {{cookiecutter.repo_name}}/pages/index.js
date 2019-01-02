import React from 'react';
import Header from '../components/organisms/Header';
import Meta from '../components/molecules/Meta';
import Footer from '../components/organisms/Footer';
import Page from '../components/layouts/Page';
import Wrapper from '../components/atoms/Wrapper';
import Column from '../components/atoms/Column';
import Grid from '../components/atoms/Grid';
import Text from '../components/atoms/Text';

export default (props) => (
  <Wrapper>
    <Meta title="Home" description="{{ cookiecutter.description }}" />
    <div>
      <Header />
      <Page>
        <Text as="h1" size="large" data-testid="home-text">This is the <strong>Home</strong> view.</Text>
        <Text as="h2" color="blue" size="jumbo">Jumbo in blue.</Text>
        <Text color="red" size="xxlarge">XXL in red.</Text>
        <Text size="xlarge">XL text.</Text>
        <Text size="large">Large text.</Text>
        <Text>Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus duis habitant maecenas sem interdum quisque duis mauris scelerisque scelerisque dui elit a condimentum vestibulum ad vestibulum. Laoreet nostra dui vivamus vestibulum integer taciti suscipit consectetur in a nullam quam nam ad nunc class nec ullamcorper urna sed nascetur ad.</Text>
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
