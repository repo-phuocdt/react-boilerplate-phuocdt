import { Form, InputNumber  } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const FormItem = Form.Item;

function InputNumberField(props) {

  return (
    <FormItem { ...props.propsFormItem }>
      <InputNumber { ...props.propsInput } />
    </FormItem>
  );
}

InputNumberField.propTypes = {
  propsFormItem: PropTypes.shape({
    name: PropTypes.string,
    rules: PropTypes.array
  }),
  propsInput: PropTypes.object
};

InputNumberField.defaultProps = {
  propsFormItem: {},
  propsInput: {}
};

export default InputNumberField;
