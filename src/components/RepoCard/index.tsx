import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Topside,
  RepoIcon,
} from './styles';

interface Props {
  username: string;
  reponame: any;
  description?: string;
  onClickModal: any;
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  onClickModal,
}) => {
  
  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
          <button onClick={onClickModal}/>
        </header>

        <p>{description}</p>
      </Topside>
    </Container>
  );
};

export default RepoCard;