import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Div100vh from 'react-div-100vh';

const Layout = ({ overflow, children }) => {
  return (
    <LayoutWrapper as={Div100vh} overflow={overflow}>
      <Header />
      <div className="contents">{children}</div>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .contents {
    flex: 1;
    overflow-y: ${(props) => (props.overflow ? 'auto' : 'hidden')};
  }
`;

export default Layout;
