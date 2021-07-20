import styled from "styled-components";




export const SectionContainer = styled.section`
    margin-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
`


export const SectionGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
column-gap: 5%;
row-gap: 60px;
`



export const ProductContainer = styled.div`
display: flex;
flex-direction: column;

`


export const ProductHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`


export const ProductIcon = styled.div`
width:32px;
height: 32px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.palette.background.accent};
margin-right: 12px;
`


export const ProductDeviceType = styled.div`
width:32px;
height: 32px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
background: #EEEDF5;
margin-right: 12px;
&:last-of-type {
    margin-right: 0px;
}
`

export const ProductHeaderLeft = styled.div`
    display: flex;
    flex-direction: row;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: ${props => props.theme.palette.text.main};
    align-items: center;
`



export const ProductheaderRight = styled.div`
    display: flex;
    flex-direction: row;
`


export const ProductBody = styled.div`

display: flex;
flex-direction: column;
margin-top: 16px;
justify-content: flex-start;
align-items: flex-start;
`


export const ProductItem = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
margin-bottom: 25px;
&:last-of-type {
    margin-bottom: 0px;
}
> div {
    width: 32px;
    min-width: 32px;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 25px;
}



>span {
    font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 17px;

color: #221F20;
}


`







