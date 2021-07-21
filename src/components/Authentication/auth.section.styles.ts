import styled from 'styled-components'

export const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: default;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position-y: -10%;
`


export const AuthWrapper = styled.div`
    width: 760px;
    min-height: 648px;
    
    padding: 40px 132px;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
    border-color: #E5E5E5;
    background: #FFFFFF;
    border-radius: 12px;
    margin-top: 120px;
    margin-bottom: 100px;
`
export const TitleBox = styled.div`
    margin-bottom: 41px;
    text-align:center
`



export const ActiveLink = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;

    
    color: #1B5CF5;
`

export const SlashTitle = styled.span`
    margin: auto 24px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: #1B5CF5;
`

export const UnactiveLink = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 39px;

    
    color: #C4C4C4;
`


export const Inscription = styled.span`
    display: flex;
    align-items:center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    
    color: #C4C4C4;
    margin-bottom:24px;
`

export const InlineImg = styled.img`
    margin-right:8px;
  
`

export const LinkBox = styled.div`
display:flex;
    align-items:center;
    height: 48px;
    background: #EEEDF5;
    border-radius: 8px;
    margin-bottom: 40px;
`

export const LinkText = styled.div`
display:flex;
    align-items:center;
    flex-grow:1;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    
    color: #C4C4C4;
`


export const LinkImg = styled.img`
    margin: auto 24px;
    
`


export const LinkButton = styled.div`
    width: 48px;
    height: 48px;
    background: #1B5CF5;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 12px;
`
export const FormContainer = styled.form`
    margin-bottom: 24px;
`

export const Submit = styled.button`
    width: 100%;
    height: 48px;
    margin-top:40px;
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
    
    background: #FDF1A5;
    border-radius: 12px;
    
   
`

export const ChangePassword = styled.button`
    width: 496px;
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
    
    background: #FFFFFF;
    border: 1px solid #0C0C0C;
    box-sizing: border-box;
    border-radius: 12px;
`


export const Error= styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    
    color: red;
    margin-top: 4px;
`
export const SpinnerBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-right: 4px;
`

export const CheckboxContainer = styled.div`
    width: 100%
    display: flex;
    flex-direction: row;
    justify-content: flex start;
`

export const Checkbox = styled.input`
    width: 18px;
    height: 18px;
    type: checkbox;
    border: 1.5px solid #1B1919;
    border-radius: 3px;
    margin-right: 11px;
`
