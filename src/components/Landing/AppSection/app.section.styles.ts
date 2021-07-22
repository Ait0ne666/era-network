import styled from 'styled-components'




export const SectionContainer = styled.section`
margin-top: 85px;

width: 100%;
display: flex;
flex-direction: row;
`

export const SectionInfo = styled.div`
display: flex;
flex-direction: column;
`

export const SectionTitle = styled.h3`
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;

color: ${props => props.theme.palette.text.main};

`


export const SectionSubtitle = styled.span`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;

color: #221F20;

margin: 20px 0px;
`


export const FounderButton = styled.button`
display: flex;
border: none;
background-color: ${props => props.theme.palette.background.secondary};
border-radius: 12px;
padding: 12px;
flex-direction: row;
justify-content: flex-start;
align-items: center;
width: 221px;
>svg {
    margin-right: 12px;
}

font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */


color: #0C0C0C;
`


export const DevicesImageContainer = styled.div`
width:70%;
min-width: 70%;
display: flex;
`
