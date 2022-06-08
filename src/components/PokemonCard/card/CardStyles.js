import styled from "styled-components";

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 392px;
  height: auto;
  margin: 0 auto;
  padding: 45px 25px;

  border-radius: 50px;
  box-shadow: 10px 10px 25px rgba(174, 174, 192, 0.4);
  box-shadow: -10px -10px 20px #ffffff;
`;

export const CartTextContentContainerStyled = styled.div`
  text-align: center;

  & h2 {
    margin: 0;

    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  & h3 {
    margin: 0;

    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const CardStatusContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardTypeContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #686868;
  }
`;
