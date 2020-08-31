import {
  AppstoreOutlined, CalendarOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons';
import React, { lazy } from 'react';
import { dsMenu as dsMenuPhanQuyen } from 'features/PhanQuyen/configs/config-menu';

export const dsMenu = [
  {
    path: '/phan-quyen',
    icon: <SettingOutlined />,
    label: 'Phân quyền',
    component: lazy(() => import('features/PhanQuyen')),
    children: [
      ...dsMenuPhanQuyen
    ]
  },
  {
    path: '/danh-muc',
    icon: <AppstoreOutlined />,
    label: 'Danh mục',
    component: lazy(() => import('custom-fields/SelectField')),
    children: []
  },
  {
    path: '/gui-mail',
    icon: <MailOutlined />,
    label: 'Gửi mail',
    component: lazy(() => import('custom-fields/CheckboxField')),
    children: []
  },
  {
    path: '/lich',
    icon: <CalendarOutlined />,
    label: 'Lịch làm việc',
    component: lazy(() => import('components/Loading')),
    children: []
  }
];