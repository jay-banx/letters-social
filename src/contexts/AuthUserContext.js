import React from "react";

const {
  Provider: AuthUserProvider,
  Consumer: AuthUserConsumer,
} = React.createContext();

export { AuthUserProvider, AuthUserConsumer };
