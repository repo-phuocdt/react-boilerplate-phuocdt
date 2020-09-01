import {
  AppstoreOutlined, CalendarOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons';
import React, { lazy } from 'react';
import { dsMenu as dsMenuPhanQuyen } from 'features/PhanQuyen/configs/config-menu';
import LayoutLogin from 'features/Login/components/layouts';
import { isValidPermission } from 'helpers/Permission';
import { permission } from 'constants/mock-data-permission';

export const dsMenu = [
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
  },
  {
    path: '/',
    icon: <AppstoreOutlined />,
    label: 'Danh mục',
    component: lazy(() => import('custom-fields/SelectField')),
    isPrivate: true,
    isPermisson: isValidPermission({
      user_Permission: permission,
      permission: ['DANH_MUC']
    }),
    children: []
  },
  {
    path: '/gui-mail',
    icon: <MailOutlined />,
    label: 'Gửi mail',
    component: lazy(() => import('custom-fields/CheckboxField')),
    isPrivate: true,
    isPermisson: isValidPermission({
      user_Permission: permission,
      permission: ['GUI_MAIL']
    }),
    children: []
  },
  {
    path: '/lich',
    icon: <CalendarOutlined />,
    label: 'Lịch làm việc',
    component: lazy(() => import('components/Loading')),
    isPrivate: true,
    isPermisson: isValidPermission({
      user_Permission: permission,
      permission: ['LICH']
    }),
    children: []
  },
  {
    path: '/dang-nhap',
    icon: <CalendarOutlined />,
    label: 'Đăng nhập',
    layout: LayoutLogin,
    component: lazy(() => import('components/Loading')),
    children: []
  }
];