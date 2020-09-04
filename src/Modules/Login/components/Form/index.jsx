import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';
import { UserOutlined, LockOutlined, NotificationFilled } from '@ant-design/icons';
import { isFunction } from 'lodash';
import InputField from '../../custom_fields/InputField';
import InputPasswordField from '../../custom_fields/InputPasswordField';
import { message } from '../../constants/variables';

function FormLogin(props) {

  const validationSchema = {
    username: [{ required: true, message: message.required }],
    password: [{ required: true, message: message.required }]
  };

  const onFinish = values => {
    if (isFunction(props.onFinish)) {
      return props.onFinish(values);
    }
  };

  const onFinishFailed = (values, errorFields, outOfDate) => {
    if (isFunction(props.onFinishFailed)) {
      return props.onFinishFailed(values, errorFields, outOfDate);
    }
  };

  const onTrigger = (e) => {
    props.setError('');
  };

  return (
    <Form
      layout="vertical"
      className={props.className}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <InputField
        propsFormItem={{
          name: 'username',
          rules: validationSchema.username,
          label: 'Tài khoản',
          colon: false,
          required: false,
          className: 'login-form-label'
        }}
        propsInput={{
          name: 'username',
          placeholder: 'Nhập tài khoản',
          prefix: <UserOutlined className="site-form-item-icon" />,
          className: 'login-form-input',
          onChange: (e) => onTrigger(e)
        }}
      />
      <InputPasswordField
        propsFormItem={{
          name: 'password',
          rules: validationSchema.password,
          label: 'Mật khẩu',
          colon: false,
          required: false,
          className: 'login-form-label'
        }}
        propsInput={{
          name: 'password',
          placeholder: 'Nhập mật khẩu',
          prefix: <LockOutlined  className="site-form-item-icon" />,
          className: 'login-form-input',
          autoComplete: 'nope',
          onChange: (e) => onTrigger(e)
        }}
      />
      { props.error && (
        <div className="login-form-error">
          <NotificationFilled /> { props.error }
        </div>
      )}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="module-login__button login-form-button"
          loading={props.isSubmitting}
        >
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
}

FormLogin.propTypes = {
  className: PropTypes.string,
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
  isSubmitting: PropTypes.bool,
  error: PropTypes.string,
  setError: PropTypes.func
};

export default FormLogin;
