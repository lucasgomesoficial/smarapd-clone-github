import styled, { css } from 'styled-components';
import { RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const Botside = styled.div`
  > ul {
    display: flex;
    align-items: center;
    > li {
      display: flex;
      align-items: center;
      margin-right: 16px;
      > span {
        margin-left: 5px;
        font-size: 12px;
        color: var(--gray);
      }
    }
  }
  
  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;

    &.other {
      background: var(--other-language);
    }

    &.javascript {
      background: var(--javascript);
    }

    &.typescript {
      background: var(--typescript);
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;