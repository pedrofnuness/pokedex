import Link from 'next/link';
import styled from 'styled-components';

export const PageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavigateContainer = styled.div`
  margin-bottom: 50px;
`;

export const NavigateLink = styled(Link)`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-family: sans-serif;

  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  svg {
    margin-right: 10px;
  };

  &:hover {
    transform: scale(1.1);
  }
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
`;