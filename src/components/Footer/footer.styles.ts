import styled from 'styled-components'



export const FooterWrapper = styled.footer`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.palette.background.primary};
padding: 0px 40px;
cursor: default;
`



export const FooterContainer = styled.div`
width: 100%;
max-width: 1200px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 24px 0px;
color: ${props => props.theme.palette.text.primary};
`


export const CompanyInfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`


export const CompanyInfoHeader = styled.div`
display: flex;
flex-direction: row; 

`

export const CompanyLogo  = styled.div`
cursor: pointer;
margin-right: 10px;
`

export const CompanyInfoHeaderInnerContainer = styled.div`
display: flex;
flex-direction: column;

`


export const CompanyTitle = styled.h4`
    font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;

color: ${props => props.theme.palette.text.secondary};
`

export const CompanySubtitle = styled.h6`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */


color: #8B7E32;

`


export const CompanyAddress = styled.div`
max-width: 35ch;
display: flex;
flex-direction: column;
>span {
    font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
}
margin: 24px 0px;
`


export const CompanyLink = styled.a`
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */

text-decoration-line: underline;
cursor: pointer;

`



export const NavigationContainer = styled.div`
display:  flex;
flex-direction: column;
align-items: flex-start;
`

export const NavigationItem = styled.div`
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
cursor: pointer;
margin-bottom: 24px;
transition-duration: 0.1s;
&:hover {
    opacity: 0.8;
}
`


export const ContactsContainer = styled.div`
display:  flex;
flex-direction: column;
align-items: flex-start;

`


export const ContactsItem = styled.div`
display:  flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 24px;

>span {
    &:first-of-type {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
    }
    &:last-of-type {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }
}

`


export const ControlsContainer = styled.div`
display:  flex;
flex-direction: column;
align-items: flex-start;
`



interface MainnetProps {
    active: boolean
}


export const MainnetInfo = styled.div<MainnetProps>`
display: flex;
flex-direction: row;
font-style: normal;
align-items: center;
font-weight: 500;
font-size: 14px;
line-height: 17px;
margin-top: 16px;
margin-bottom: 24px;
justify-content: flex-end;

> span {
    display: flex;
flex-direction: row;
align-items: center;
    width: 175px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    margin-left: 40px;
    >div {
        margin-left: 20px;
        width:14px;
        height: 14px;
        border-radius: 7px;
        background-color: ${props => props.active ? '#1B5CF5': 'red'};
        
    }
}



`



export const LanguageControlsContainer = styled.div`
display: flex;
flex-direction: row;
font-style: normal;
align-items: center;
font-weight: 500;
font-size: 14px;
line-height: 17px;
margin-top: 16px;
margin-bottom: 24px;
justify-content: flex-end;
width: 100%;
`


export const LanguageSelect = styled.span`

    display: flex;
    flex-direction: row;
    align-items: center;
    width: 175px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    margin-left: 40px;

`




