import { AuthState, AuthAction } from "./types";

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,  
  error: false,
  login: null,
};

export default function auth(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        login: action.payload.login,
      };
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}