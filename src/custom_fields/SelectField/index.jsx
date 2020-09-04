import { Form, Select } from 'antd';
import { isEmpty, map } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const { Option } = Select;
const FormItem = Form.Item;

function SelectField(props) {

  return (
    <FormItem { ...props.propsFormItem }>
      <Select { ...props.propsSelect }>
        { !isEmpty(props.propsSelect.data) && map(props.propsSelect.data, item => (
          <Option
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className={item.className}
          >
            { item.title }
          </Option>
        )) }
      </Select>
    </FormItem>
  );
}

SelectField.propTypes = {
  propsFormItem: PropTypes.shape({
    name: PropTypes.string,
    rules: PropTypes.array
  }),
  propsSelect: PropTypes.object
};

SelectField.defaultProps = {
  propsFormItem: {},
  propsSelect: {
    style: { width: '100%' }
  }
};

export default SelectField;
