import { Layout } from 'antd';
import React from 'react';
import './layout.scss';
import Sidebar from './SideBar';

const { Content } = Layout;

function LayoutMain(props) {
  return (
    <Layout className="layout-main">
      <Sidebar />
      <Layout className="layout-content">
        <Content className="layout-content__content">
          { props.children }
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutMain;
