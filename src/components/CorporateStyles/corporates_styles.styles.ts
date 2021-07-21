import { propNames } from "@chakra-ui/react";
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
    margin-top: 48px;
`

export const LogoSectionTitle = styled.div`
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
color: ${props => props.theme.palette.text.main};
`


export const LogosWrapper = styled.div`
display: flex;
flex-direction: row;
margin-top: 12px;

`


export const LogoInnerContainer = styled.div`
display: flex;
flex-direction: column;
margin-right: 70px;
`


export const LogoInnerContainerTitle = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: ${props => props.theme.style.colors.mainText};
    margin-bottom: 24px;
`



interface LogoImageProps {
    width?: string
}

export const LogoImage = styled.div<LogoImageProps>`
display: flex;
flex-direction: row;
align-items: center;
>svg {
    height: ${props => props.width?? '80px'};
    width: ${props => props.width?? '80px'};
}

>span {
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: 51px;
    margin-left: 16px;
    color: ${props => props.theme.style.colors.main};
}


`






export const DownloadContainer =  styled.div`
display: flex;
flex-direction: column;
align-items: center;

>span {
    margin-top: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    width: 23ch;
    color: ${props => props.theme.style.colors.subtitle}
}


`



export const ColorSection = styled.section`
margin-top: 48px;
display: flex;
flex-direction: column;
width: 100%;
`



export const ColorSectionTitle = styled.h6`
margin: 0;
color: ${props => props.theme.style.colors.headers};
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;

margin-bottom: 24px;
`


export const ColorsContainer = styled.div`
width: 100%;
max-width: 950px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`


export const ColorContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
min-width: 313px;
margin-bottom: 24px;
`


interface ColorDisplay {
    color: string
}


export const ColorDisplay = styled.div`
height: 80px;
width: 80px;
border-radius: 50%;
border: 2px solid ${props => props.theme.style.colors.bg};
box-sizing: border-box;
background: ${props => props.color};
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
margin-right: 20px;
`


export const ColorDescriptionContainer = styled.div`
display: flex;
flex-direction: column;
>h6 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 6px;
    color: ${props => props.theme.style.colors.mainText}
}
>span {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: ${props => props.theme.style.colors.subtitle}
}
`



export const CarSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 100px;
margin-bottom: 100px;
align-items: center;
>img {
    width:80%;
}
`


export const CarSectionHeader = styled.div`
display: flex; 

flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
color: ${props => props.theme.style.colors.headers};
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;

`