import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Div100vh from 'react-div-100vh';

const Layout = (props) => {
  return (
    <LayoutWrapper as={Div100vh}>
      <Header />
      <div className="contents">{props.children}</div>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .contents {
    flex: 1;
    overflow-y: hidden;
  }
`;

export default Layout;
