/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Link } from "react-router-dom";

import { SignOutButton, SignInButton } from "../../components";

import { HOME, FEED, PROFILE } from "../../constants/routes";
import { withAuthUser } from "../../hocs";

const style = {
  backgroundColor: "blue",
  "& > ul": {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    margin: "10px 0",
  },
  "& > ul > li": {
    marginRight: "2vw",
  },
  "& > ul > li:last-child": {
    marginLeft: "auto",
  },
  "& a": {
    textDecoration: "none",
    color: "white",
  },
};

const Header = ({ authUser }) =>
  authUser ? <HeaderAuth /> : <HeaderNonAuth />;

const HeaderAuth = () => (
  <div css={style}>
    <ul>
      <li>
        <Link to={HOME}>Home</Link>
      </li>
      <li>
        <Link to={FEED}>Feed</Link>
      </li>
      <li>
        <Link to={PROFILE}>Profile</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);

const HeaderNonAuth = () => (
  <div css={style}>
    <ul>
      <li>
        <Link to={HOME}>Home</Link>
      </li>
      <li>
        <SignInButton />
      </li>
    </ul>
  </div>
);

export default withAuthUser(Header);
