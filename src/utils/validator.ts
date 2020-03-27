import { isEmpty } from "lodash";
import {is} from 'is_ts';

export const formValidator = (fields: any) => {
  const errors: any = {};

  if (isEmpty(fields.loginField)) {
    errors.loginField = "Это обязательное поле!";
  }

  if (isEmpty(fields.passwordField)) {
    errors.passwordField = "Это обязательное поле!";
  }

  return errors;
};

export const passLength = (len: number) => (value: string) => {
  return value?.length < len
    ? `Минимальная длина пароля:  ${len}`
    : null;
};

export const onlyEmail = (value: string) => {
  if (is.email(value)) {
    return null;
  } else {
      return 'Некорректно указан email'
  }
};
