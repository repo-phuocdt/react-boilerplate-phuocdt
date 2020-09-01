import { intersection, size, isEmpty } from 'lodash';

export const isValidPermission = ({ permission = [], orPermission = [], user_Permission = [] }) => {

  if (!isEmpty(permission) && size(intersection(user_Permission, permission)) === size(permission)) {
    return true;
  }

  if (!isEmpty(orPermission) && !isEmpty(intersection(user_Permission, orPermission))) {
    return true;
  }

  return false;
};