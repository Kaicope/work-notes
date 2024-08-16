import {AppActionType, AppActionTypes} from './app.types';

export const appSuccess = (): AppActionType => ({
  type: AppActionTypes.APP_SUCCESS,
});

export const appFailed = (): AppActionType => ({
  type: AppActionTypes.APP_FAILED,
});