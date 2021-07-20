import styled from 'styled-components'


interface ButtonProps {
    width?: string,

}

export const CustomButton = styled.button<ButtonProps>`
border: none;
border-radius: 12px;

background-color: ${props => props.theme.palette.background.secondary};
color: ${props => props.theme.palette.text.main};
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;

height: 48px;

width: ${ props =>  props.width ?? '250px'};


`





export const PageWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 0 40px;
cursor: default;
background-position: 0% 0%;
background-repeat: no-repeat;
background-size: 100% auto;
background-position-y: -10%;
`



export const PageContainer = styled.div`
  padding-top: 197px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;

  width: 100%;
  max-width: 1200px;
`

export const Label = styled.label`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 4px;
`

export const Input = styled.input`
    width:100%;
    height: 68px;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 12px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    padding: 24px 25px;
`
