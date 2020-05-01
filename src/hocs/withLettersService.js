import React from "react";
import { LettersServiceConsumer } from "../contexts";

const withLettersService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <LettersServiceConsumer>
        {(lettersService) => {
          const lettersProps = mapMethodsToProps(lettersService, props);
          return <Wrapped {...props} {...lettersProps} />;
        }}
      </LettersServiceConsumer>
    );
  };
};

export default withLettersService;
