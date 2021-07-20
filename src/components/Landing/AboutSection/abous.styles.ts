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


export const InfoContainer = styled.div`
margin-top: 24px;
width: 100%;
padding: 27px 40px 40px 40px;
background-color: white;
border-radius: 12px;
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
`

export const InfoRow = styled.div`

display: flex;
flex-direction: row;
align-items: center;
`

export const ChartContainer = styled.div`
/* overflow: hidden; */
flex: 3;
display: flex;
flex-direction: column;
`
export const ChartInnerContainer = styled.div`
background: #F8F8F8;
border-radius: 9.17103px;
`

export const YContainer = styled.div`
width: 100%;
justify-content: space-between;
display: flex;
flex-direction: row;
>div {
    font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */


color: #221F20;
}
`


export const TableContainer = styled.div`
flex: 2;
margin-left: 33px;
display: flex;
flex-direction: column;
`


export const GeneralInfoContainer = styled.div`
display: flex;
flex-direction: column;
`


export const CapitalizationInfo = styled.div`
display:  flex;
flex-direction: row;
align-items: flex-end;
>div {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #1B1919;
    &:not(:last-of-type) {
        margin-right: 5%;
    }
}

`


export const CapitalizationEmphasis = styled.h5`
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 37px;
/* identical to box height */


color: #1B1919;

margin-bottom: 9px;

`


export const DescriptionContainer = styled.div`
background: linear-gradient(91.5deg, #FCE34C -12.26%, #FFE818 115.64%);
border-radius: 12px;
padding: 24px;
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 40px;
margin-top: 28px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;

color: #221F20;
`


export const TableHeader = styled.p`
margin: 0;
padding: 0;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;

color: #221F20;
`


interface TableRowProps {
    active?: boolean,
    finished?: boolean
}



export const TableRow = styled.div<TableRowProps>`
height: 34px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 11px;
background-color: ${props => props.active ? 'rgba(255, 231, 35, 0.7)' : 'transparent'};
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
color: #1B1919;


${props => props.finished ? `
    color: #C4C4C4;
    position: relative;
    &::after {
        content: '';
        width: 100%;
        height: 0.6px;
        position: absolute;
        top: 16px;
        left: 0px;
        background: #1B1919;
    }
`: ``}


`


