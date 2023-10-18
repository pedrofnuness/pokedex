import Link from 'next/link';
import styled from 'styled-components';

export const CustomLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  justify-content: center;
`;
