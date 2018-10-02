import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'

export default () => (
  <Page>
    <Helmet title="404" />
    <h1>There was a 404 error!</h1>
  </Page>
);
