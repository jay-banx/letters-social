/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header } from "../components";
import {
  FeedPage,
  HomePage,
  LoginPage,
  ProfilePage,
  NotFoundPage,
} from "../pages";

const style = {
  display: "grid",
  gridGap: 10,
  gridAutoRows: "minmax(30px, auto)",
};

const App = () => {
  return (
    <Router>
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: "lightgrey",
          },
        }}
      />
      <div css={style}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/feed/" exact>
            <FeedPage />
          </Route>
          <Route path="/login/" exact>
            <LoginPage />
          </Route>
          <Route path="/profile/" exact>
            <ProfilePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
