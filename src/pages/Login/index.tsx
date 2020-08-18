import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

import { Container, LoginForm, GithubLogo } from './styles';

const Login: React.FC = () => {
  const { loadingSignInRequest, isSignedIn, token } = useSelector((state: StoreState) => state.auth);
  const dispatch = useDispatch();

  console.log('msg: ', token);

  return (
    <Container>
      <GithubLogo />

      <LoginForm>
        <h1>Acesso ao GitHub:</h1>

        <input
          placeholder="Usuário"
          name="username"
          type="text"
        />

        <input
          placeholder="Senha"
          name="password"
          type="password"
        />

  <button onClick={() => dispatch(signInRequest({ username: 'admin', password: 'password' }))}>{loadingSignInRequest ? 'Carregando' : 'Entrar'}</button>
      </LoginForm>
    </Container>
  );
}

export default Login;