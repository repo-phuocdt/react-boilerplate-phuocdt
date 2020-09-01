import { Result } from 'antd';
import React from 'react';

function Forbidden() {
  return (
    <Result
      status="403"
      title="Không có quyền"
      subTitle="Xin lỗi, bạn không có quyền truy cập trang này."
    />
  );
}

export default Forbidden;
