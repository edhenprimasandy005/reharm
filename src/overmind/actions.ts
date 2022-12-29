/* eslint-disable no-param-reassign */
export const setAppName = ({ state }: any, payload: any) => {
  state.appName = payload;
};
export const signIn = ({ state }: any, payload: {}) => {
  console.log(payload);
  state.isLogin = true;
  return payload;
};
