import React, { Fragment, Suspense } from 'react';
import { Route } from "react-router-dom";
import { menu } from './subroute/main';


const index = (props) => {
  return (
    <Fragment>
      {menu.map(detail => (
        <Route 
          key={detail.path}
          path={detail.path}
          exact={detail.exact}
          render={routeProps => (
            <Suspense fallback={null}>
              <detail.component {...routeProps} {...props} />
            </Suspense>
          )}
        />
      ))}
    </Fragment>
  )
}

export default index;