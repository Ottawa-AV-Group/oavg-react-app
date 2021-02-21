import React, { FunctionComponent } from "react";

type User = Object | undefined;
export default User;

export type UserState = { user: User };
export type UserPayload = { nextUser: User };

export function userReducer(state: UserState, action: UserPayload): UserState {
  return { user: action.nextUser };
}

export const UserStateContext = React.createContext<UserState>({
  user: undefined,
});
export const UserDispatchContext = React.createContext<
  undefined | React.Dispatch<UserPayload>
>(undefined);

export const UserProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, { user: undefined });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};
