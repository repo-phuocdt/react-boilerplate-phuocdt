import { Layout, Menu } from 'antd';
import classnames from 'classnames';
import { dsMenu } from 'configs/config-menu';
import { isEmpty, map, isBoolean } from 'lodash';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Auth } from 'helpers/Auth';

const { Sider } = Layout;
const { SubMenu } = Menu;
const MenuItem = Menu.Item;

function handleActive(location, path) {
  const getLocation = location.pathname;

  if (getLocation === path) {
    return true;
  }

  return false;
}

function renderMenu(data, location, pathParent) {
  const isAuth = Auth().isAuthenticated;
  const result = map(data, (item) => {
    const isPermisson = isBoolean(item.isPermisson) ? item.isPermisson : true;
    const { isPrivate } = item;

    if ((!isAuth && isPrivate) || !isPermisson) return;

    if (!isEmpty(item.children)) {
      return (
        <SubMenu key={pathParent ? `${pathParent}${item.path}` : item.path} icon={item.icon} title={item.label}>
          { renderMenu(item.children, location, pathParent ? `${pathParent}${item.path}` : item.path) }
        </SubMenu>
      );
    }

    return (
      <MenuItem
        key={pathParent ? `${pathParent}${item.path}` : item.path}
        icon={item.icon}
        className={classnames({
          'ant-menu-item-selected': handleActive(location, pathParent ? `${pathParent}${item.path}` : item.path)
        })}>
        <NavLink to={pathParent ? `${pathParent}${item.path}` : item.path}>
          { item.label }
        </NavLink>
      </MenuItem>
    );
  });

  return result;
}

function Sidebar() {
  const newOpenKeys = map(dsMenu, item => item.path);

  const [openKeys] = useState(newOpenKeys);

  const location = useLocation();

  return (
    <Sider
      breakpoint="md"
      collapsedWidth="0"
    >
      <NavLink to='/'>
        <div className="layout-main__logo" />
      </NavLink>
      <Menu
        mode='inline'
        theme='dark'
        defaultOpenKeys={openKeys}
      >
        { renderMenu(dsMenu, location) }
      </Menu>
    </Sider>
  );
}

export default Sidebar;