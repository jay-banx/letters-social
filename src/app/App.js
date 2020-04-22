/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "../components";
import { FeedPage, HomePage, LoginPage, ProfilePage } from "../pages";

const style = {
  display: "grid",
  gridGap: 10,
  gridTemplateRows: "10vh 90vh",
};

const App = () => {
  return (
    <Router>
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <div css={style}>
        <Header />
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
      </div>
    </Router>
  );
};

export default App;
