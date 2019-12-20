import api from 'axios-flow';
import {
  GET_ADMINS,
  UPDATE_ADMIN,
  CREATE_ADMIN,
  GET_ONE_ADMIN,
  UNLOCKED_ADMIN,
  ENABLE_ADMIN,
  UPDATE_DEFAULT_BRANCH,
} from './adminActionTypes';
import { API_URL } from '../../variables/constants';

const URL = `${API_URL}/api`;

export const getAdmins = (businessId, quries) => dispatch => {
  api(dispatch)
    .url(`${URL}/businesses/${businessId}/users`)
    .action(GET_ADMINS)
    .params(quries)
    .get();
};

export const getOneAdmin = adminId => dispatch => {
  api(dispatch)
    .url(`${URL}/users/${adminId}`)
    .action(GET_ONE_ADMIN)
    .get();
};

export const updateAdmin = (adminId, data, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/users/${adminId}`)
    .action(UPDATE_ADMIN)
    .onSuccess(onSuccess)
    .data(data)
    .update();
};

export const createAdmin = (data, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/users`)
    .action(CREATE_ADMIN)
    .onSuccess(onSuccess)
    .data(data)
    .post();
};

export const updateDefaultBranch = (defaultBranchId, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/branches/${defaultBranchId}/update`)
    .action(UPDATE_DEFAULT_BRANCH)
    .onSuccess(onSuccess)
    .update();
};

export const enableAdmin = (id, enabled, onSuccess) => dispatch => {
  const endpoint = enabled ? 'enable' : 'disable';
  api(dispatch)
    .url(`${URL}/users/${id}/${endpoint}`)
    .action(ENABLE_ADMIN)
    .onSuccess(onSuccess)
    .update();
};

export const unlock = (id, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/users/${id}/unlock`)
    .action(UNLOCKED_ADMIN)
    .onSuccess(onSuccess)
    .update();
};
