import { action } from "typesafe-actions";

export function signInRequest({ username, password }: { username: string; password: string; }) {
  return action('@auth/SIGN_IN_REQUEST', {
    username,
    password,
  });
}

export function signInSuccess({ login }: { login: string }) {
  return action('@auth/SIGN_IN_SUCCESS', {
    login,
  });
}

export function signInFailure() {
  return action('@auth/SIGN_IN_FAILURE');
}