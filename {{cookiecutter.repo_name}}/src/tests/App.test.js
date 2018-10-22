import React from "react";
import { render, fireEvent, cleanup, waitForElement } from "react-testing-library";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "jest-dom/extend-expect";
import App from "../App";

/** UTILITIES **/
// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

function renderWithRouter(
  ui,
  { route = "/", history = createMemoryHistory({ initialEntries: [route] }) } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
}

test("Clicking the header image navigates a user to the root page", async () => {
  // Route to the /about page
  const { getByTestId } = renderWithRouter(<App />, { route: "/about" });
  expect(getByTestId("about-text")).toBeVisible();

  // Click the main home image
  fireEvent.click(getByTestId("home-image"));

  // Assert that the content of the home page is visible upon routing
  const homeTextNode = await waitForElement(() => getByTestId("home-text"));
  expect(homeTextNode).toBeVisible();
});
