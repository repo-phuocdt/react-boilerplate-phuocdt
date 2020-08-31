import { Form, Upload, Button } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';

const FormItem = Form.Item;
const { Dragger } = Upload;

function UploadField(props) {

  const Element = props.type === 'Dragger' ? Dragger : Upload;
  const children = props.children ? props.children : (
    <Button>
      <UploadOutlined /> Upload
    </Button>
  );

  // fix lỗi upload file với form antd, formItem thêm props getValueFromEvent={normFile}
  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <FormItem { ...props.propsFormItem } getValueFromEvent={normFile}>
      <Element { ...props.propsUpload }>
        { children }
      </Element>
    </FormItem>
  );
}

UploadField.propTypes = {
  propsFormItem: PropTypes.shape({
    name: PropTypes.string,
    rules: PropTypes.array
  }),
  propsUpload: PropTypes.object,
  type: PropTypes.string
};

UploadField.defaultProps = {
  propsFormItem: {},
  propsUpload: {},
  type: 'Dragger'
};

export default UploadField;
