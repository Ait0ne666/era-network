import styled from 'styled-components'




export const SectionContainer = styled.section`
margin-top: 100px;

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

export const Cards = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-top: 32px;
`


export const Card = styled.div`
flex: 1;
padding: 19px 34px 19px 50px;
background-color: #fff;
border-radius: 12px;
box-shadow: 0px 11px 30px rgba(0, 0, 0, 0.15);
display: flex;
flex-direction: row;
align-items: center;
&:nth-of-type(2) {
    margin: 0px 39px;
    
}

>span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: #221F20;

    &:first-of-type {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 49px;
        margin-right: 34px;
        color: ${props => props.theme.palette.text.main};
    }
}


`


