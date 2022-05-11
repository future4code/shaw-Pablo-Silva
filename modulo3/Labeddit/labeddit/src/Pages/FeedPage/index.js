import ImgLogo from '../../img/Logo.png'
import { MainContainer, ContainerLogo, CardPosts } from './style'
import api from '../../Services/api'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { grey } from "@mui/material/colors"
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { IoMdChatboxes } from 'react-icons/io'




const FeedPage = () => {
    useProtectedPage()

    const [posts, setPosts] = useState([])
    const [post, setPost] = useState('')
    const [title, setTitle] = useState('')
    const navigate = useNavigate()

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handlePost = (event) => {
        setPost(event.target.value)
    }

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        navigate('/')
    }


    const getPosts = async (props) => {

        const token = window.localStorage.getItem('token')

        try {
            const response = await api.get(`posts`, {
                headers: {
                    Authorization: token
                }
            }
            )
            console.log(response.data);
            setPosts(response.data)
            setTitle('')
            setPost('')

        } catch (error) {
            console.log(error.response)
        }
    }

    const postPosts = async () => {
        const token = window.localStorage.getItem('token')
        const body = {
            title: title,
            body: post
        }

        try {
            await api.post(`posts`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }

            )
            getPosts()
            alert('Seu post foi criado com sucesso !')

        } catch (error) {
            console.log(error.response)
            alert('Erro ao criar post')
        }
    }

    useEffect(() => {
        getPosts()

    }, [])


    const arrayPosts = posts.map((item) => {
        return (
            <CardPosts onClick={() => navigate(`/PostPage/${item.id}`)} key={item.id}>
                <p className='fontSize'>Enviado por: <strong>{item.username}</strong></p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>

                <div>
                <AiOutlineArrowUp size={30}/>
                <strong>{item.voteSum}</strong>
                <AiOutlineArrowDown size={30}/>    
                
                <IoMdChatboxes className='MarginChatBox' size={30}/>  
                <strong>{item.commentCount}</strong>
                </div>
            </CardPosts>
        )
    })



    return (
        <MainContainer>
            <ContainerLogo>

                <Button style={{color: grey[900]}} onClick={handleLogout}><strong>Logout</strong></Button>
                <img src={ImgLogo} />

            </ContainerLogo>
            <TextField onChange={handleTitle} value={title} placeholder='Digite o título do seu post' />
            <TextField className='InputPost' multiline onChange={handlePost} value={post} placeholder='Digite seu post...' />
            <Button  style={{color: grey[900]}} onClick={postPosts} className="button1"><strong>Enviar post</strong></Button>
            {arrayPosts}

        </MainContainer>
    )
}

export default FeedPage