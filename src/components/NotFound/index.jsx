import { Result } from 'antd';
import React from 'react';

function NotFound() {
  return (
    <Result
      status="404"
      title="Không tìm thấy"
      subTitle="Xin lỗi, trang ban truy cập không tồn tại."
    />
  );
}

export default NotFound;
