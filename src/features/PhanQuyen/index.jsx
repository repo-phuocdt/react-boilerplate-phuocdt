import Loading from 'components/Loading';
import NotFound from 'components/NotFound';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { map } from 'lodash';
import { dsMenu } from './configs/config-menu';

function PhanQuyen() {
  const match = useRouteMatch();

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Redirect exact from={match.url} to={`${match.url}/danh-sach`} />
        { map(dsMenu, (item, index) => (
          <Route key={index} path={`${match.url}${item.path}`} component={item.component} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default PhanQuyen;
