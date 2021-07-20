import styled from 'styled-components'



export const MediaKitSectionContainer = styled.section`
display: flex;
flex-direction: column;
margin-top: 90px;
margin-bottom: 50px;
width: 100%;

`


export const MediaKitWrapper = styled.div`
background: linear-gradient(91.5deg, #FCE34C -12.26%, #FFE818 115.64%);
border-radius: 12px;
height: 191px;
width: 100%;
position: relative;
    &::before {
        z-index: -1;
    position: absolute;
    top: 15px;
    left: 3%;
    content: "";
    height: 190px;
    width: 94%;
    background: rgba(252, 227, 76, 0.5);
    filter: blur(10px);
    border-radius: 8px;
    }
`

export const MediaKitContainer = styled.div`
background-position: center;
background-repeat: no-repeat;
background-size: cover;
padding: 24px 64px;
display: flex;
flex-direction: column;
>h5 {
    font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;
/* identical to box height */


color: #1B1919;
}
>span {
    margin-top: 12px;
    margin-bottom: 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */


    color: #221F20;
}
>a>button {
    background: #1B1919;
    border-radius: 12px;
    width: 250px;
    height: 48px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */


    color: #FFFFFF;
}
`

