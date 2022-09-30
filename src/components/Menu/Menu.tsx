import { FC } from 'react';
import { Link } from 'react-router-dom';
import Styled from './Menu.styles';

export interface ILink {
  id: string;
  path: string;
  name: string;
}

interface IMenuProps {
  menu: ILink[];
  color: string;
}

const Menu: FC<IMenuProps> = ({ menu, color }) => {
  return (
    <Styled.Wrapper>
      {menu.map(({ id, path, name }) => (
        <Link
          to={path}
          key={id}
        >
          <Styled.InnerLink color={color}>{name}</Styled.InnerLink>
        </Link>
      ))}
    </Styled.Wrapper>
  );
};

export default Menu;
