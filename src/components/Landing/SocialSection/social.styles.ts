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



export const SocialContainer = styled.div`
margin-top: 24px;
display: flex;
flex-direction: row;
justify-content: space-around;
>img {
    cursor: pointer;
    &:not(:last-of-type) {
        margin-right: 24px;
    }
}
`