import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, LoginForm, GithubLogo } from './styles';

const Login: React.FC = () => {
  const [form, setForm] = useState({username: '', password: ''});

  const changeForm = (event: { target: { name: string; value: string; }; }) => {
    const {name, value} = event.target;

    setForm({ ...form, [name]: value });
  }

  const submitForm = (event: any) => {
    event.preventDefault();

    console.log(form)

    setForm({username: '', password: ''})
  }

  return (
    <Container>
      <GithubLogo />

      <LoginForm onSubmit={submitForm}>
        <h1>Acesso ao GitHub:</h1>

        <input
          placeholder="Usuário"
          onChange={changeForm}
          name="username"
          type="text"
          value={form.username}
        />

        <input
          placeholder="Senha"
          onChange={changeForm}
          name="password"
          type="password"
          value={form.password}
        />

        <Link to={'/overview'}>Entrar</Link>

      </LoginForm>
    </Container>
  );
}

export default Login;