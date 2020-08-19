import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ProfileData from '../../components/ProfileData';
import RandomCalendar from '../../components/RandomCalendar';

import { APIUser } from '../../@types';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  CalendarHeading,
  RepoIcon,
  BookIcon,
  Tab,
} from './styles';
import Header from '../../components/Header';


interface Data {
  user?: APIUser;
  error?: string;
}

const Profile: React.FC = () => {
  const { username = 'gaearon' } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'Usuário não encontrado!' });
        return;
      }

      const user = await userResponse.json();

      setData({
        user,
      });
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user) {
    return <h1>Carregando...</h1>;
  }

  const TabContent = () => (
    <>
      <div className="content1">
        <BookIcon />
        <span className="label">Overview</span>
      </div>
  
      <Link to={`/${username}/repos`} className="content2">
        <RepoIcon />
        <span className="label">Repositórios</span>
        <span className="number">{data.user?.public_repos}</span>
      </Link>
    </>
  );

  return (
    <Container>
      <Header/>
      
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <div className="alo">
              <TabContent />
            </div>
            
            <span className="line" />
          </Tab>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;