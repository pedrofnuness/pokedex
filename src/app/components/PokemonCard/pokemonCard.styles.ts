import styled from 'styled-components';

export const OutsideContainer = styled.div`
  width: 300px;
  height: 450px;
  background: linear-gradient(180deg, #444 0%, #777 100%);
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-family: 'Arial', sans-serif;
`;

export const InsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 15px;
  height: 100%;
  background-color: #f5f5f5;
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 24px;
`;

export const HpSpan = styled.p`
  background: #fff;
  color: #4CAF50;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  background: linear-gradient(90deg, #c3c3c3 0%, #d9d4d4 100%);;

`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;


  padding: 10px;
`;

