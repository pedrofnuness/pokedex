'use client';

import React from 'react';
import * as Styled from './navigation.styles';

type NavigationProps = {
  toNextPage: () => {};
  toPreviousPage: () => {};
};

const Navigation = ({ toNextPage, toPreviousPage }: NavigationProps) => {
  return (
    <Styled.ButtonContainer>
      <Styled.Button onClick={toPreviousPage}>Previous</Styled.Button>
      <Styled.Button onClick={toNextPage}>Next</Styled.Button>
    </Styled.ButtonContainer>
  );
};

export default Navigation;