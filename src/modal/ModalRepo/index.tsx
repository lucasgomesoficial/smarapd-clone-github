import React from 'react';

import {
  Botside,
  StarIcon,
  ForkIcon,
} from './styles';

interface Props {
  language?: string;
  stars: number;
  forks: number;
  isOpen: boolean;
  // onClickClose: any;
}

const ModalRepo: React.FC<Props> = ({
  language,
  stars,
  forks,
  isOpen,
  // onClickClose,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other';

  if (!isOpen) { return null; }

  return (
    <div className="ui-modal__overlay">
      <div className="ui-modal">
        <Botside>
          <ul>
            <li>
              <div className={`language ${languageClass}`} />
              <span>{language}</span>
            </li>
            <li>
              <StarIcon />
              <span>{stars}</span>
            </li>
            <li>
              <ForkIcon />
              <span>{forks}</span>
            </li>
          </ul>
          {/* <button type="button" className="close-button" onClick={onClickClose}>X</button> */}
        </Botside>
        {/* <button type="button">X</button> */}
      </div>
    </div>
  );
};

export default ModalRepo;