import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;

`
export const ContainerInputButton = styled.div`
display: flex;
@media(max-width: 1000px){
    flex-direction: column;
    width: 300px;
}
`

export const Image = styled.img`
width: 200px;
border-radius: 10px;
`

export const ImageIcon = styled.img`
width: 50px;
height: 50px;
margin: 10px;
`

export const ConstainerIcon = styled.div`
display: flex;

`
