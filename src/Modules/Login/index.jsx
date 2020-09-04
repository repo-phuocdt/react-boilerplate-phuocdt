import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { decamelizeKeys } from 'humps';
import { isEmpty, isFunction } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormLogin from './components/Form';
import './login.scss';

function Login(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const uri = props.redirectUri || '/';

  useEffect(() => {
    if (props.hasToken) {
      history.push(uri);
    }
  });

  const handleLoginFacebook = () => {
    if (isFunction(props.loginFacebook)) {
      return props.loginFacebook();
    }
  };

  const hanldeLoginGoogle = () => {
    if (isFunction(props.loginGoogle)) {
      return props.loginGoogle();
    }
  };

  const onSubmit = async (values) => {

    if (isFunction(props.onSubmit)) {
      return props.onSubmit(values);
    }

    if (isFunction(props.actionLogin)) {
      try {

        await setIsSubmitting(true);
        await setError('');
        const response = await props.actionLogin(decamelizeKeys(values));

        if (!isEmpty(response.error)) {
          return new Error(response.error.message);
        }

        return history.push(uri);

      } catch (error) {
        setIsSubmitting(false);
        setError(error);
      }
    }
  };

  return (
    <div className="module-login">
      <div className="module-login__container">
        <p>Đăng Nhập</p>
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col sm={12} xs={24}>
            <Button
              className="module-login__button module-login__button--facebook"
              onClick={handleLoginFacebook}
            >
              <FacebookFilled /> Facebook
            </Button>
          </Col>
          <Col sm={12} xs={24}>
            <Button
              className="module-login__button module-login__button--google"
              onClick={hanldeLoginGoogle}
            >
              <GoogleCircleFilled /> Google
            </Button>
          </Col>
        </Row>
        <div className="module-login__form">
          <FormLogin
            onFinish={onSubmit}
            error={error}
            isSubmitting={isSubmitting}
            setError={setError}
          />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func,
  actionLogin: PropTypes.func,
  redirectUri: PropTypes.string,
  hasToken: PropTypes.bool
};

export default Login;