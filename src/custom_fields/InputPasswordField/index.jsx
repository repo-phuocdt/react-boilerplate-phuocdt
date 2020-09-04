import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const FormItem = Form.Item;

function InputPasswordField(props) {

  return (
    <FormItem { ...props.propsFormItem }>
      <Input.Password { ...props.propsInput } />
    </FormItem>
  );
}

InputPasswordField.propTypes = {
  propsFormItem: PropTypes.shape({
    name: PropTypes.string,
    rules: PropTypes.array
  }),
  propsInput: PropTypes.object
};

InputPasswordField.defaultProps = {
  propsFormItem: {},
  propsInput: {}
};

export default InputPasswordField;
