/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";

import { JSONService, FirebaseService } from "../services";
import { ServiceProvider, AuthUserProvider } from "../contexts";

import { HOME, FEED, AUTH, PROFILE } from "../constants/routes";

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

const service = new FirebaseService();

class App extends Component {
  state = {
    authUser: null,
  };

  componentDidMount() {
    this.listener = service.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <ServiceProvider value={service}>
        <AuthUserProvider value={this.state.authUser}>
          <Router>
            <Global styles={globalStyles} />
            <div css={style}>
              <Header />
              <Switch>
                <Route path={HOME} exact component={HomePage} />
                <Route path={FEED} exact component={FeedPage} />
                <Route path={AUTH} exact component={AuthPage} />
                <Route path={PROFILE} exact component={ProfilePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </Router>
        </AuthUserProvider>
      </ServiceProvider>
    );
  }
}

export default App;
