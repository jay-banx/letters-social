/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { compose } from "../../utils";
import { withService, withData, withAuthUser } from "../../hocs";

const style = {};

const Profile = ({ authUser }) =>
  authUser ? <ProfileAuth authUser={authUser} /> : <ProfileNonAuth />;

const ProfileAuthBase = ({ data: user }) => {
  const { firstName, lastName, username, age, avatar } = user;

  return (
    <div css={style}>
      <img src={avatar} alt="" />
      <ul>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Username: {username}</li>
        <li>Age: {age}</li>
      </ul>
    </div>
  );
};

const mapMethodsToProps = (service, props) => ({
  getData: () => service.getUser(props.authUser.uid),
});

const ProfileAuth = compose(
  withService(mapMethodsToProps),
  withData
)(ProfileAuthBase);

const ProfileNonAuth = () => {
  return <div css={style}>ProfileNonAuth</div>;
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default withAuthUser(Profile);
