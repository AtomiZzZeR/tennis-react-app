import { FC } from 'react';
import Styled from './Contacts.styles';

export interface IContact {
  icon: string;
  link: string;
}

interface IContactsProps {
  contacts: IContact[];
}

const Contacts: FC<IContactsProps> = ({ contacts }) => {
  return (
    <Styled.Wrapper>
      {contacts.map(({ icon, link }) => (
        <Styled.Link
          href={link}
          target={'_blank'}
        >
          <img
            src={icon}
            alt={'icon contact'}
          />
        </Styled.Link>
      ))}
    </Styled.Wrapper>
  );
};

export default Contacts;
