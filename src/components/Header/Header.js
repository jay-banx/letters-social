/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Link } from "react-router-dom";

import { SignOutButton } from "../../components";

import { HOME, FEED, AUTH, PROFILE } from "../../constants/routes";
import { withAuthUser } from "../../hocs";

const style = {
  backgroundColor: "blue",
  "& > ul": {
    display: "flex",
    alignItems: "center",
  },
  "& > ul > li:last-child": {
    marginLeft: "auto",
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
        <Link to={AUTH}>Auth</Link>
      </li>
    </ul>
  </div>
);

export default withAuthUser(Header);
