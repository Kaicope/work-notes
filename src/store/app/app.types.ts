export type AppStatus = 'loading' | 'success' | 'failed';

export type AppTheme = 'light' | 'dark' | 'system';

export enum AppActionTypes {
  APP_SUCCESS = 'APP/SUCCESS',
  APP_FAILED = 'APP/APP_FAILED',
  APP_THEME = 'APP/THEME',
}

interface AppSuccess {
  type: typeof AppActionTypes.APP_SUCCESS;
}

interface AppFailed {
  type: typeof AppActionTypes.APP_FAILED;
}

interface AppThemeAction {
  type: typeof AppActionTypes.APP_THEME;
  payload: AppTheme;
}

export type AppActionType = AppSuccess | AppFailed | AppThemeAction;
