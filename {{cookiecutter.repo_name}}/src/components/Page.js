import React from "react";
import styled from "styled-components";
import Grid from "./Grid";
import Column from "./Column";

const StyledPage = styled.div`
  padding: 40px 0;
`;

export default ({ children }) => {
  return (
    <StyledPage>
      <Grid>
        <Column width={8} smallWidth={12}>
          {children}
        </Column>
        <Column width={4} smallWidth={12}>
          Here is a sidebar for some reason.
        </Column>
      </Grid>
    </StyledPage>
  );
};
