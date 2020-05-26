import React from "react";
import { AuthUserConsumer } from "../contexts";

const withAuthUser = (Wrapped) => {
  return (props) => {
    return (
      <AuthUserConsumer>
        {(authUser) => {
          return <Wrapped {...props} authUser={authUser} />;
        }}
      </AuthUserConsumer>
    );
  };
};

export default withAuthUser;
