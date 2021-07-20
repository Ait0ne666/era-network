import styled from 'styled-components'

export const HelpWrapper = styled.div`
    width: 460px;
    height: 735px;
    background: #FFFFFF;
    border-radius: 12px;  
    padding: 39px 40px 85px 40px;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
    border-color: #E5E5E5;
    borer-width 1;
    margin: 2em auto;
`

export const HelpContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 24px;
`



export const Error= styled.span`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 17px;

color: red;
margin-top: 4px;
`


export const HelpTitle = styled.h3`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: #1B1919;
    margin-bottom: 40px;
`

export const FormContainer = styled.form`
    
`

export const Submit = styled.button`
width:100%;
height: 48px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;

color: #0C0C0C;

background: #FCE34C;
border-radius: 12px;
`

export const SpinnerBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-right: 4px;
`
