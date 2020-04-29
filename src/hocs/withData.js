import React, { useState, useEffect } from "react";

import { LoadingIndicator, ErrorIndicator } from "../components";

const withData = (Wrapped) => (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onGetData = (data) => {
    setData(data);
    setLoading(false);
    setError(null);
  };

  const onError = (error) => {
    setData(null);
    setLoading(false);
    setError(error);
  };

  const updateData = () => {
    setData(null);
    setLoading(true);
    setError(null);
    props.getData().then(onGetData).catch(onError);
  };

  useEffect(() => {
    updateData();
  }, []);

  return loading ? (
    <LoadingIndicator />
  ) : error ? (
    <ErrorIndicator />
  ) : (
    <Wrapped {...props} data={data} />
  );
};

export default withData;
