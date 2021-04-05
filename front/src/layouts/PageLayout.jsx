import React from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';

const PageLayout=()=>{
    return (
        <Container>
            <Header>
                <Main>Page</Main>
            </Header>
        </Container>
    );
};

// MainPageLayout.propTypes = {
//     children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
//   };
  
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin-right: auto;
    margin-left: auto;
  `;
  const Main = styled.main`
    margin-top: 3rem;
    max-width: 1280px;
    width: 100%;
    @media (min-width: 1012px) {
      padding-right: 32px !important;
    }
    @media (min-width: 1012px) {
      padding-left: 32px !important;
    }
    @media (min-width: 768px) {
      padding-right: 24px !important;
    }
    @media (min-width: 768px) {
      padding-left: 24px !important;
    }
  `;
  
  export default PageLayout;