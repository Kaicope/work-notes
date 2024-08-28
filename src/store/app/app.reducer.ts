import {ColorSchemeName} from 'react-native';
import {AppActionType, AppActionTypes, AppStatus} from './app.types';

export const AppReduxPersistBlackList: (keyof AppState)[] = ['appStatus'];

export interface AppState {
  appStatus: AppStatus;
  appTheme: ColorSchemeName;
}

const initialState: AppState = {
  appStatus: 'loading',
  appTheme: null,
};

export const AppReducer = (
  state: AppState = initialState,
  action: AppActionType,
): AppState => {
  switch (action.type) {
    case AppActionTypes.APP_SUCCESS:
      return {
        ...state,
        appStatus: 'success',
      };
    case AppActionTypes.APP_FAILED:
      return {
        ...state,
        appStatus: 'failed',
      };
    case AppActionTypes.APP_THEME:
      return {
        ...state,
        appTheme: action.payload,
      };
    default:
      return state;
  }
};
