import {
  AppstoreOutlined, CalendarOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons';
import React, { lazy } from 'react';

export const dsMenu = [
  {
    path: '/danh-sach',
    icon: <SettingOutlined />,
    label: 'Phân quyền',
    component: lazy(() => import('custom_fields/UploadField')),
    children: []
  },
  {
    path: '/them-moi',
    icon: <AppstoreOutlined />,
    label: 'Danh mục',
    component: lazy(() => import('custom_fields/SelectField')),
    children: []
  },
  {
    path: '/chinh-sua',
    icon: <MailOutlined />,
    label: 'Gửi mail',
    component: lazy(() => import('custom_fields/CheckboxField')),
    children: []
  },
  {
    path: '/lich-cong-tac',
    icon: <CalendarOutlined />,
    label: 'Lịch làm việc',
    component: lazy(() => import('components/Loading')),
    children: []
  }
];