import styled from 'styled-components';

interface IInnerLinkProps {
  color: string;
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 739px;
`;

const InnerLink = styled.span<IInnerLinkProps>`
  color: ${(props) => props.color};
  transition: 0.5s;
  border: 1px solid transparent;

  &:hover {
    padding: 0px 20px;
    border-bottom: 1px solid #fff;
  }
`;

const StyledMenu = {
  Wrapper,
  InnerLink,
};

export default StyledMenu;
