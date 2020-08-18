import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { RiLogoutCircleRLine } from 'react-icons/ri';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
  margin: -24px -24px 16px -24px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  &:hover {
    opacity: 0.7;
  }
`;

export const LoginIcon = styled(FaUserAlt)`
  fill: var(--logo);
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  margin-right: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

export const LogoutIcon = styled(RiLogoutCircleRLine)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  &:hover {
    opacity: 0.7;
  }
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(min-width: 768px) {
    justify-content: flex-start;
  }

  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 60%;

    @media(min-width: 768px) {
      width: 40%;
    }
  }

  button {
    color: var(--primary);
    background: var(--header);
    border: 1px solid var(--primary);
    border-radius: 5px;
    padding: 7px 8px;
    cursor: pointer;
    flex-shrink: 0;

    @media(min-width: 768px) {
      margin-left: 10px;
    }
  }
`;