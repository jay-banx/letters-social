/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import { JSONService, FirebaseService } from "../services";
import { ServiceProvider } from "../contexts";

import * as ROUTES from "../constants/routes";

import { Header } from "../components";
import {
  FeedPage,
  HomePage,
  AuthPage,
  ProfilePage,
  NotFoundPage,
} from "../pages";

const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "lightgrey",
  },
};

const style = {
  display: "grid",
  gridGap: 10,
  gridAutoRows: "minmax(30px, auto)",
};

const App = () => {
  const [service] = useState(new JSONService());

  return (
    <ServiceProvider value={service}>
      <Router>
        <Global styles={globalStyles} />
        <div css={style}>
          <Header />
          <Switch>
            <Route path={ROUTES.HOME} exact component={HomePage} />
            <Route path={ROUTES.FEED} exact component={FeedPage} />
            <Route path={ROUTES.AUTH} exact component={AuthPage} />
            <Route path={ROUTES.PROFILE} exact component={ProfilePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </ServiceProvider>
  );
};

export default App;
