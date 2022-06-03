import styled from 'styled-components';

export const StatusBarContainerStyled = styled.div`
    display: felx;
    justify-content: space-between;
`

export const StatusBarTitleStyled = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    color: #4B4B4B;
`

export const StatusBarLineStyled = styled.div`
    width: 150px;
    height: 20px;
    background-color: white;
`

export const StatusBarActiveStyled = styled.div`
    width: ${(props) => `${props.power}%`};
    height: 20px;
    background-color: red;
`