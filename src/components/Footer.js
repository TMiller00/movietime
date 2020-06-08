import React from 'react';
import styled from 'styled-components';
import { Link as _Link} from 'react-router-dom';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 40px;

`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 328px;
  margin-bottom: 40px;
`;

const Link = styled(_Link)`
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.64);
  text-decoration: none;
`;

const Copyright = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.32);
`;

const Footer = () => (
  <Container>
    <LinkContainer>
      <Link>Ad Choice</Link>
      <Link>Privacy Policy</Link>
      <Link>Terms of Service</Link>
    </LinkContainer>
    <Copyright>© 2020 Crackle Plus, LLC. All rights reserved.</Copyright>
  </Container>
)

export default Footer
