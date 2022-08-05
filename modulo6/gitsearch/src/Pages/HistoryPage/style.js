import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
`

export const ConstainerIcon = styled.div`
display: flex;

`

export const ContainerMainContents = styled.div`
display: flex;
justify-content: center;
border: solid;
border-radius: 5px;
height: 500px;
width: 300px;
@media(max-width: 1000px){
height: 400px;
width: 320px;

}


`

export const ContainerContCont = styled.div`
display: flex;
margin-left: -1300px;
@media(max-width: 1000px){
    margin-left: -10px;
    

}

@media(min-width: 1000px){
    margin-left: -1000px;
    

}

`

export const IconHistory = styled.div`
display: flex;
cursor: pointer;

`

export const ImgIconHistory = styled.img`
width: 15px;
height: 15px;
margin-right: 5px;
`


export  const StyledMapArr = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;

`

export const ContainerMapArr = styled.div`
cursor: pointer;
margin-top: 10px;

`

export const ContainerUserInfo = styled.div`
display: flex;
margin-top: -450px;
align-items: center;
flex-direction: column;
@media(max-width: 1000px){
    margin-top: -10px;
    

}

`

export const IconBackContent = styled.img`
width: 20px;

`

export const ContentIconBack = styled.div`
display: flex;
cursor: pointer;

`


