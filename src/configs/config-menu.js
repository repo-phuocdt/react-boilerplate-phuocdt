import {
  CalendarOutlined,
  SettingOutlined
} from '@ant-design/icons';
import React, { lazy } from 'react';
import { dsMenu as dsMenuPhanQuyen } from 'features/PhanQuyen/configs/config-menu';
import { isValidPermission } from 'helpers/Permission';
import { permission } from 'constants/mock-data-permission';
import LayoutLogin from 'features/Login/components/layouts';

const routePublic = [
  {
    path: '/dang-nhap',
    icon: <CalendarOutlined />,
    label: 'Đăng nhập',
    layout: LayoutLogin,
    exact: true,
    component: lazy(() => import('features/Login')),
    children: []
  }
];

const routePrivate = [
  {
    path: '/phan-quyen',
    icon: <SettingOutlined />,
    label: 'Phân quyền',
    component: lazy(() => import('features/PhanQuyen')),
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