import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
input{
    width: 400px;
    height: 300px;
    border-radius: 20px;
}

`

export const ContainerLogo = styled.div`
display: flex;
flex-direction: row-reverse;
flex-direction: column;

img {
    width: 40px;
}

`

export const CardPosts = styled.div`
display: flex;
align-items: center;
flex-direction: column;
border: solid 1px;
margin: 10px;
border-radius: 10px;
background-color: #d3d3d3;
.fontSize {
    font-size: 13px;
    margin-right: 130px;
}


`