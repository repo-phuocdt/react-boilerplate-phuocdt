import Forbidden from 'components/Forbidden';
import LayoutMain from 'components/Layouts';
import NotFound from 'components/NotFound';
import { dsMenu } from 'configs/config-menu';
import { Auth } from 'helpers/Auth';
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

function RenderRoute() {

  return (
    <Switch>
      {/* <Redirect exact from="/" to="/" /> */}

      { map(dsMenu, (item, index) => {
        const isPermisson = isBoolean(item.isPermisson) ? item.isPermisson : true;
        const isPrivate = item.isPermisson;
        const Component = item.component;
        const Layout = item.layout || LayoutMain;

        if (!isPermisson) return;

        if (isPrivate) {
          return <PrivateRoute
            key={index}
            path={item.path}
            component={Component}
            layout={Layout}
            isPermisson={isPermisson}
          />;
        }

        return <Route key={index} path={item.path} render={(routerProps) => (
          <Layout>{ <Component {...routerProps} /> }</Layout>
        )} />;
      })}

      <Route component={NotFound} />
    </Switch>
  );
}

export default RenderRoute;