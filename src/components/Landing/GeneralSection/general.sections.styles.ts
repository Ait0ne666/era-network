import styled from "styled-components";




export const SectionContainer = styled.section`

width: 100%;
display: flex;
flex-direction: row;
align-items: flex-start;

`



export const InfoContainer = styled.div`
display: flex;
flex: 3;
flex-direction: column;

`


export const ImageContainer = styled.div`
display: flex;
flex: 2.2;
margin-left: 50px;
`


export const InfoTitle = styled.h3`
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;
color: ${props => props.theme.palette.text.main};
`


export const InfoSubtitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 32px 0px;
`
export const InfoSubtitleBorder = styled.div`
width: 3px;
min-width: 3px;
height: 120px;
border-radius: 5px;
background-color: ${props => props.theme.palette.background.accent};
margin-right: 12px;
`


export const InfoSubtitleText = styled.span`
padding: 10px 0px;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;


color: #221F20;
`


export const TelegramContainer = styled.div`
display: flex;
flex-direction: row;
padding: 12px;
width: 90%;
align-items: center;
background: linear-gradient(91.5deg, #FCE34C -12.26%, #FFE818 115.64%);
border-radius: 12px;
cursor: pointer;
position: relative;
&::after {
    z-index: -1;
    position: absolute;
    top: 15px;
    left: 4%;
    content: "";
    height: 84px;
    width: 92%;
    background: rgba(252, 227, 76, 0.5);
    filter: blur(7px);
    border-radius: 8px;
}
`


export const TelegramIcon = styled.div`
margin-right: 12px;

`

export const TelegramInfoContainer = styled.div`
display: flex;
flex-direction: column;
`


export const TelegramInfoTitle = styled.div`
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;


color: ${props => props.theme.palette.text.main};

`

export const TelegramInfoSubtitle = styled.div`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;


color: #221F20;

`





