import styled from "styled-components";


export const StylesHeader = styled.h3`

font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;


color: ${props => props.theme.palette.text.main};

align-self: flex-start;
`


export const LogoSection = styled.section`
    display: flex ;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const LogoSectionTitle = styled.div`
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
color: ${props => props.theme.palette.text.main};
`


export const LogoInnerContainer = styled.div`
display: flex;
flex-direction: column;
`