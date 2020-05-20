import React, { Component } from "react";

import { LoadingIndicator, ErrorIndicator } from "../components";

const withData = (Wrapped) =>
  class extends Component {
    initialState = {
      data: null,
      loading: true,
      error: false,
    };

    state = this.initialState;

    onGetData = (data) => {
      this.setState({
        data,
        loading: false,
        error: false,
      });
    };

    onError = () => {
      this.setState({
        data: null,
        loading: false,
        error: true,
      });
    };

    onEmpty = () => {
      this.setState({
        data: null,
        loading: false,
        error: false,
      });
    };

    objIsArr = (obj) => {
      for (let key in obj) {
        if (obj[key].constructor === Object) {
          return true;
        }
      }
      return false;
    };

    updateData = () => {
      this.setState({ ...this.initialState });

      this.props.getData().on(
        "value",
        (snapshot) => {
          const dataObject = snapshot.val();

          if (dataObject) {
            let data;

            if (this.objIsArr(dataObject)) {
              data = Object.keys(dataObject).map((key) => ({
                id: key,
                ...dataObject[key],
              }));
            } else {
              data = {
                id: snapshot.key,
                ...dataObject,
              };
            }

            this.onGetData(data);
          } else {
            this.onEmpty();
          }
        },
        this.onError
      );
    };

    componentDidMount() {
      this.updateData();
    }

    componentWillUnmount() {
      this.props.getData().off();
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
