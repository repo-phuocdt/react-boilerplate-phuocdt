import LayoutMain from 'components/Layouts';
import Loading from 'components/Loading';
import NotFound from 'components/NotFound';
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { map } from 'lodash';
import { dsMenu } from 'configs/config-menu';

function App() {
  return (
    <BrowserRouter>
      <LayoutMain>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact from="/" to="/phan-quyen" />
            { map(dsMenu, (item, index) => (
              <Route key={index} path={item.path} component={item.component} />
            ))}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </LayoutMain>
    </BrowserRouter>
  );
}

export default App;
