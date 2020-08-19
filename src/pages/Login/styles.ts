import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('https://github.blog/wp-content/uploads/2017/10/spokes-diagram.jpg');

  @media(min-width: 768px) {
    height: 500px;
    display: flex;
    flex-direction: row;
    padding: 11px 16px;
  }
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--primary);
  width: 50%;
  height: 50%;
  margin-top: 15px;

  @media(min-width: 768px) {
    margin-top: 0px;
    width: 60%;
    height: 60%;
  }
`;

export const LoginForm = styled.div`
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary);
  margin: 20px;
  padding: 15px;
  border-radius: 5px;

  @media(min-width: 768px) {
    padding: 60px 40px;
  }

  h1 {
    display: flex;
    justify-content: flex-start;
    font-size: 15px;
    font-weight: 500;
    margin-left: -50px;
    margin-bottom: 5px; 

    @media(min-width: 768px) {
      margin-bottom: 10px;      
    }
  }

  input {
    border: 1px solid var(--header);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
    margin-bottom: 10px;
  }

  a {
    color: var(--primary);
    background: var(--green);
    border-radius: 5px;
    padding: 7px 70px;
    text-decoration: none;
    display: flex;
    justify-items: flex-end;

    @media(min-width: 768px) {
      
      &:hover {
        background: var(--green-dark);
      }
    }
  }
`;
