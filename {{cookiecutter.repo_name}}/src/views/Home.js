import React from "react";
import Helmet from "react-helmet";
import Page from "../components/Page";
import { StyledH1 } from "../styles/text";

export default () => (
  <Page>
    <Helmet title="Home" />
    <StyledH1 data-testid="home-text">
      This is the <strong>Home</strong> view.
    </StyledH1>
    <p>
      Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus duis habitant
      maecenas sem interdum quisque duis mauris scelerisque scelerisque dui elit a condimentum
      vestibulum ad vestibulum. Laoreet nostra dui vivamus vestibulum integer taciti suscipit
      consectetur in a nullam quam nam ad nunc class nec ullamcorper urna sed nascetur ad.
    </p>
  </Page>
);
