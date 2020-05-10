import React, { Component } from "react";

import { LoadingIndicator, ErrorIndicator } from "../components";

const withData = (Wrapped) =>
  class extends Component {
    state = {
      data: null,
      loading: true,
      error: null,
    };

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
      this.setState({
        data: null,
        loading: true,
        error: null,
      });
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
