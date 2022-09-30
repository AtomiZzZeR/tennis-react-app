import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 138px;
`;

const Link = styled.a`
  transition: 0.3s;
  border-radius: 50%;

  &:hover {
    transform: scale(1.2) translateY(-3px);
    box-shadow: 0px 4.5px 8px 0.5px #333;
  }

  &:active {
    transform: scale(1.3);
  }
`;

const StyledContacts = {
  Wrapper,
  Link,
};

export default StyledContacts;
