import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGOUT_USER_SUCCESS,
  FORGOT_PASSWORD_START,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loadingLogin: false,
  loadingForgot: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case CREATE_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case CREATE_USER_FAIL:
      return { ...state, error: 'Failed to Create User', loading: false };
    case LOGIN_USER_START:
      return { ...state, loadingLogin: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return {
        ...state, error: 'Authentication Failed', password: '', loadingLogin: false,
      };
    case LOGOUT_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case FORGOT_PASSWORD_START:
      return { ...state, loadingForgot: true };
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, loadingForgot: false };
    case FORGOT_PASSWORD_FAIL:
      return { ...state, loadingForgot: false };
    default:
      return state;
  }
};
