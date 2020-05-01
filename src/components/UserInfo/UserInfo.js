/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { compose } from "../../utils";
import { withData, withLettersService } from "../../hocs";

const style = {
  display: "flex",
};

const UserInfo = ({ data: user }) => {
  const { avatar, firstName, lastName } = user;
  return (
    <div css={style}>
      <img src={avatar} alt="avatar" width="30px" height="30px" />
      <div>{`${firstName} ${lastName}`}</div>
    </div>
  );
};

UserInfo.propTypes = {};

UserInfo.defaultProps = {};

const mapMethodsToProps = (lettersService, props) => ({
  getData: () => lettersService.getUser(props.userId),
});

export default compose(
  withLettersService(mapMethodsToProps),
  withData
)(UserInfo);
