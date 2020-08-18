import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { APIUser, APIRepo } from '../../@types';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  RepoIcon,
  Tab,
} from './styles';

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Repo: React.FC = () => {
  const { username = 'gaearon' } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      setData({
        user,
        repos,
      });
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => (
    <>
      <Link to={'/overview'} className="content2">
        <RepoIcon />
        <span className="label">Overview</span>
      </Link>

      <div className="content1">
        <RepoIcon />
        <span className="label">Repositories</span>
        <span className="number">{data.user?.public_repos}</span>
      </div>
    </>
  );

  return (
    <Container>
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

          <Repos>
            <div>
              {data.repos.map((item) => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Repo;