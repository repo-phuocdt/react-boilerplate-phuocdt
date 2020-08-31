import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const FormItem = Form.Item;

function InputField(props) {

  return (
    <FormItem { ...props.propsFormItem }>
      <Input { ...props.propsInput } />
    </FormItem>
  );
}

InputField.propTypes = {
  propsFormItem: PropTypes.shape({
    name: PropTypes.string,
    rules: PropTypes.array
  }),
  propsInput: PropTypes.object
};

InputField.defaultProps = {
  propsFormItem: {},
  propsInput: {}
};

export default InputField;
