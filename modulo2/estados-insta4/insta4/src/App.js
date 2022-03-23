import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import PostDois from './components/Post/PostDois'
import PostTres from './components/Post/PostTres'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Helena'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <PostDois
          nomeUsuario={'Francisco'}
          fotoUsuario={'https://picsum.photos/50/80'}
          fotoPost={'https://picsum.photos/200/50'}
        />
        <PostTres
          nomeUsuario={'Paulinho'}
          fotoUsuario={'https://picsum.photos/50/60'}
          fotoPost={'https://picsum.photos/200/70'}
        />
      </MainContainer>
    );
  }
}

export default App

