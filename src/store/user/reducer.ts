import {LoginAction, UserAction, UserState} from './types';
import {USER_ACTION_TYPES} from './actions';

export const InitialState: UserState = {};

export const user = (state: UserState = InitialState, action: UserAction) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOGIN:
      const {email, user} = <LoginAction>action;
      return {email, ...user};
    default:
      return state;
  }
};
