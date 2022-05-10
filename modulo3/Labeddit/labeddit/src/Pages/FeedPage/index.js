import ImgLogo from '../../img/Logo.png'
import { MainContainer, ContainerLogo, CardPosts } from './style'
import api from '../../Services/api'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useProtectedPage } from '../../Hooks/useProtectedPage'




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


    const getPosts = async () => {
        
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
            const response = await api.post(`posts`, body,
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
            <CardPosts>
                <p className='fontSize'>Enviado por: {item.username}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </CardPosts>
        )
    })



    return (
        <MainContainer>
            <ContainerLogo>

                <button onClick={handleLogout}>Logout</button>
                <img src={ImgLogo} />

            </ContainerLogo>
            <input onChange={handleTitle} value={title} placeholder='Digite o título do seu post' />
            <input onChange={handlePost} value={post} placeholder='Digite seu post...' />
            <button onClick={postPosts}>Enviar post</button>
            {arrayPosts}

        </MainContainer>
    )
}

export default FeedPage