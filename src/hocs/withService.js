import React from "react";
import { ServiceConsumer } from "../contexts";

const withService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <ServiceConsumer>
        {(service) => {
          const serviceProps = mapMethodsToProps(service, props);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </ServiceConsumer>
    );
  };
};

export default withService;
