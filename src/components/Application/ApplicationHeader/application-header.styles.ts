import styled from "styled-components";





export const ApplicationHeaderContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 28px;
`



export const ApplicationPageTitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;

>h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: ${props => props.theme.style.colors.headers}
}
>span {
    margin-left: 12px;
    color: ${props => props.theme.style.colors.accent};
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
}
`


export const ApplicationNavigationContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`



interface NavigationProps {
    active?: boolean,
    locked?: boolean
}


export const ApplicationNavigationItem = styled.button<NavigationProps>`
display: flex;
flex-direction: row;
height: 48px;
padding: 14px 24px;
border-radius: 12px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
border: 1px solid ${props => props.theme.style.colors.main};
box-sizing: border-box;
margin-right: 4px;
&:nth-of-type(5) {
    margin-right: 0px;
}


${props => props.active? `
background: ${props.theme.style.colors.main};
`:`
background: ${props.theme.style.colors.bg};
`};




${props => props.locked ? `
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: ${props.theme.style.colors.bg};
background: ${props.theme.style.colors.disabled};
`: ``}



>svg {
    margin-right: 5px;
}
`




