import { Form, TreeSelect } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const FormItem = Form.Item;

function TreeSelectField(props) {

  return (
    <FormItem { ...props.propsFormItem }>
      <TreeSelect { ...props.propsTreeSelect } />
    </FormItem>
  );
}

TreeSelectField.propTypes = {
  propsFormItem: PropTypes.shape({
    name: PropTypes.string,
    rules: PropTypes.array
  }),
  propsTreeSelect: PropTypes.object
};

TreeSelectField.defaultProps = {
  propsFormItem: {},
  propsTreeSelect: {
    style: { width: '100%' }
  }
};

export default TreeSelectField;
