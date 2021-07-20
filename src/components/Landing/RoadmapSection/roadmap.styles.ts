import styled from "styled-components";





export const SectionContainer = styled.section`
margin-top: 40px;

width: 100%;
display: flex;
flex-direction: column;
`


export const SectionHeader = styled.div`
display: flex;
flex-direction: row;
width: 100%;

justify-content: space-between;
margin-bottom: 20px;
`

export const SectionTitle = styled.h3`
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;

color: ${props => props.theme.palette.text.main};

`