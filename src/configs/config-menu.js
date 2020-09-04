import {
  CalendarOutlined,
  SettingOutlined
} from '@ant-design/icons';
import React, { lazy } from 'react';
import { dsMenu as dsMenuPhanQuyen } from 'Features/PhanQuyen/configs/config-menu';
import { isValidPermission } from 'Helpers/Permission';
import { permission } from 'constants/mock-data-permission';
import LayoutLogin from 'Features/Login/components/layouts';

const routePublic = [
  {
    path: '/dang-nhap',
    icon: <CalendarOutlined />,
    label: 'Đăng nhập',
    layout: LayoutLogin,
    exact: true,
    component: lazy(() => import('Features/Login')),
    children: []
  }
];

const routePrivate = [
  {
    path: '/phan-quyen',
    icon: <SettingOutlined />,
    label: 'Phân quyền',
    component: lazy(() => import('Features/PhanQuyen')),
    isPrivate: true,
    isPermisson: isValidPermission({
      user_Permission: permission,
      permission: ['HE_THONG']
    }),
    children: [
      ...dsMenuPhanQuyen
    ]
  }
];

export const dsMenu = [
  ...routePublic,
  ...routePrivate
];