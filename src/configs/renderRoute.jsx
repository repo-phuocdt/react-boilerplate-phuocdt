import Forbidden from 'components/Forbidden';
import LayoutMain from 'components/Layouts';
import NotFound from 'components/NotFound';
import { dsMenu } from 'configs/config-menu';
import { Auth } from 'Helpers/Auth';
import { map, isBoolean } from 'lodash';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

function PrivateRoute({ component: Component, layout: Layout, isPermisson, ...rest }) {

  return (
    <Route
      {...rest}
      render={(routerProps) => {
        if (Auth().isAuthenticated) {
          if (!isPermisson) {
            return <Layout>{ <Forbidden /> }</Layout>;
          }
          return <Layout> <Component {...routerProps} /> </Layout>;
        }

        return <Redirect to={{ pathname: '/dang-nhap', state: { from: routerProps.location } }} />;
      }}
    />
  );
}

function PublicRoute({ component: Component, layout: Layout, ...rest }) {

  return (
    <Route
      {...rest}
      render={(routerProps) => {
        return <Layout> <Component {...routerProps} /> </Layout>;
      }}
    />
  );
}

function RenderRoute() {

  return (
    <Switch>
      <Redirect exact from="/" to="/phan-quyen" />

      { map(dsMenu, (item, index) => {
        const isPermisson = isBoolean(item.isPermisson) ? item.isPermisson : true;
        const isPrivate = item.isPermisson;
        const Component = item.component;
        const Layout = item.layout || LayoutMain;

        if (!isPermisson) return;

        if (!isPrivate) {
          return (
            <PublicRoute
              key={index}
              path={item.path}
              component={Component}
              layout={Layout}
              exact={item.exact}
            />
          );
        }

        if (isPrivate) {
          return (
            <PrivateRoute
              key={index}
              path={item.path}
              component={Component}
              layout={Layout}
              isPermisson={isPermisson}
              exact={item.exact}
            />
          );
        }
      })}

      <Route component={NotFound} />
    </Switch>
  );
}

export default RenderRoute;