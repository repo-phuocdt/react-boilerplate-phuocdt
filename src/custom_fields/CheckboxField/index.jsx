import { Form, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const FormItem = Form.Item;

function CheckboxField(props) {

  return (
    <FormItem { ...props.propsFormItem }>
      <Checkbox { ...props.propsCheckbox } />
    </FormItem>
  );
}

CheckboxField.propTypes = {
  propsFormItem: PropTypes.shape({
    name: PropTypes.string,
    rules: PropTypes.array
  }),
  propsCheckbox: PropTypes.object
};

CheckboxField.defaultProps = {
  propsFormItem: {},
  propsCheckbox: {}
};

export default CheckboxField;
