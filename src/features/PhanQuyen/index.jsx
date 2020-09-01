import Loading from 'components/Loading';
import NotFound from 'components/NotFound';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { map, isBoolean } from 'lodash';
import { dsMenu } from './configs/config-menu';
import Forbidden from 'components/Forbidden';

function PhanQuyen() {
  const match = useRouteMatch();

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Redirect exact from={match.url} to={`${match.url}/danh-sach`} />

        { map(dsMenu, (item, index) => {
          const isPermisson = isBoolean(item.isPermisson) ? item.isPermisson : true;
          const Component = isPermisson ? item.component : Forbidden;

          if (!isPermisson) return;

          return <Route key={index} path={`${match.url}${item.path}`} component={Component} />;
        })}

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default PhanQuyen;
