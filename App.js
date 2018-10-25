import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import Home from './FunctionEarth';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  };
};

