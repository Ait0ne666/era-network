import styled from "styled-components";




export const SectionContainer = styled.section`
margin-top: 60px;

width: 100%;
display: flex;
flex-direction: column;
`


export const SectionHeader = styled.div`
display: flex;
flex-direction: row;
width: 100%;

justify-content: space-between;
`

export const SectionTitle = styled.h3`
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;

color: ${props => props.theme.palette.text.main};

`

export const Articles = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-top: 36px;
`

export const ArticleItem = styled.div`
cursor: pointer;
display: flex ;
flex-direction: column;
flex: 1;
&:nth-of-type(2) {
    margin: 0px 39px;
}
`


export const ArticleHeader = styled.div`
display: flex;
flex-direction: row;
align-items: center;

>svg {
    margin-right: 20px;
}
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;

margin-bottom: 15px;
color: ${props => props.theme.palette.text.main};
`


export const ArticleBody = styled.div`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;

color: #221F20;
margin-bottom: 12px;

`



export const ArticleDate = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;

`

