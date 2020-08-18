import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim());
  }

  return (
    <Container>
      <Link to='/'>
        <GithubLogo />
      </Link>
      
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Busca de usuário"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <button
          onClick={handleSubmit}
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        >Buscar</button>
      </SearchForm>
    </Container>
  );
};

export default Header;