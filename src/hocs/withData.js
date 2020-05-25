import React, { Component } from "react";

import { LoadingIndicator, ErrorIndicator } from "../components";

const withData = (Wrapped) =>
  class extends Component {
    initialState = {
      data: null,
      loading: true,
      error: null,
    };

    state = { ...this.initialState };

    onGetData = (data) => {
      this.setState({
        data,
        loading: false,
        error: null,
      });
    };

    onError = (error) => {
      this.setState({
        data: null,
        loading: false,
        error,
      });
    };

    updateData = () => {
      this.setState({ ...this.initialState });
      this.props.getData().then(this.onGetData).catch(this.onError);
    };

    componentDidMount() {
      this.updateData();
    }

    render() {
      const { data, loading, error } = this.state;
      return loading ? (
        <LoadingIndicator />
      ) : error ? (
        <ErrorIndicator />
      ) : (
        <Wrapped {...this.props} data={data} />
      );
    }
  };

export default withData;
