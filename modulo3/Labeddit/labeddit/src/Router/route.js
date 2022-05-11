import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'
import FeedPage from '../Pages/FeedPage'
import PostPage from '../Pages/PostPage'
import RegisterPage from '../Pages/RegisterPage'
import styled from 'styled-components'

const GlobalStyled = styled.div`
margin: 0px;
padding: 0px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`


export const Router = () => {
    return (

        <GlobalStyled>
            <BrowserRouter>

                <Routes>

                    <Route index element={<LoginPage />} />
                    <Route path='FeedPage' element={<FeedPage />} />
                    <Route path='PostPage/:id' element={<PostPage />} />
                    <Route path='RegisterPage' element={<RegisterPage />} />

                </Routes>

            </BrowserRouter>

        </GlobalStyled>
    )




}



