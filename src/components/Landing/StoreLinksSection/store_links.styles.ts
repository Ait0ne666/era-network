import styled from 'styled-components'




export const SectionContainer = styled.section`
margin-top: 60px;

width: 100%;
display: flex;
flex-direction: row;
`




export const StoreLinkContainer = styled.div`
cursor: pointer;
flex: 1;
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 24px;
height: 70px;
&:not(:last-of-type) {
    margin-right: 10px;
}


background: #141414;
border-radius: 12px;
>img {
    margin-right: 23px;
}
`


export const StoreLinkInfo = styled.div`
display: flex;
flex-direction: column;
>span {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    &:first-of-type {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
    }
}


`