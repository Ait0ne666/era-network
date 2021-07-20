import styled from 'styled-components'



export const HeaderWrapper = styled.nav`
    width: 100%;
    position: fixed;
    background-color: transparent;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 40px 5px 40px;
    background-color: rgba(255,255,255,0.8);
    
    z-index: 1;
`


export const HeaderContainer = styled.div`
width: 100%;
max-width: 1200px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`


export const LogoContainer = styled.div`
cursor: pointer;
`


export const NavigationContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`




interface NavigationItemProps {
    active: boolean
}

export const NavigationItem = styled.span<NavigationItemProps>`
font-style: normal;
font-size: 16px;
line-height: 20px;
color: ${props=> props.active? props.theme.palette.text.accent:  props.theme.palette.text.main};


font-weight: ${props => props.active ? 800: 600};

cursor: pointer;
margin: 0px 16px;

transition-duration: 0.1s;

&:hover {
    opacity: 0.8;
}
`


export const SettingsControls = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`


export const LanguageControlsContainer = styled.div`
cursor: pointer;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 60px;
height: 60px;
margin-left: 15px;
background-color: ${props => props.theme.palette.background.accent};

border-radius: 30px;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;

color: ${props => props.theme.palette.text.primary};
`


