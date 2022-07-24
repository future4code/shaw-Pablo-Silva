import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
export const ContainerInputButton = styled.div`
display: flex;
margin-top: 60px;

@media(max-width: 1000px){
    flex-direction: column;
    width: 250px;
    overflow: hidden;
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

export const IconHistory = styled.div`
display: flex;
margin-left: 1300px;
margin-top: -60px;
cursor: pointer;
@media(max-width: 1000px){
margin-left: 45px;
margin-top: -10px;


}

`

export const ImgIconHistory = styled.img`
width: 35px;
`

export const ConstainerIcon = styled.div`
display: flex;
align-items: center;
flex-direction: row-reverse;

`
