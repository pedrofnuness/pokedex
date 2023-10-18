import styled from 'styled-components';

export const Button = styled.button`
  background-color: #fff;
  color: #FF9800;
  padding: 10px 20px;
  margin-top: 15px;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out, transform 0.04s ;

  &:hover {
    background-color: #f3f3f3;
  }
  &:active {
    box-shadow: none;
    transform: translateY(3px);
  }
`;