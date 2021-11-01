import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useLocation, Switch } from "react-router-dom";
import store from './stores/store';

import Routes from './configs/routes'

const Index = () => {
  let location = useLocation();
  console.log(location)
  useEffect(() => {

  }, [])

  return (
    <Provider store={store}>
      <Switch>
        <Routes />
      </Switch>
    </Provider>
  )
}

export default Index;