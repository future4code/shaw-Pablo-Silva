import { useEffect, useState } from "react"
import { MainContainer, CardComment } from "./style"
import api from "../../Services/api"
import { useNavigate, useParams } from "react-router-dom"
import { useProtectedPage } from "../../Hooks/useProtectedPage"
import { Button, TextField } from "@mui/material"
import { grey } from "@mui/material/colors"
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'

const PostPage = () => {
    useProtectedPage()

    const [commentPosts, setCommentPosts] = useState([])
    const [comment, setComment] = useState('')
    const params = useParams()
    const navigate = useNavigate()

    const handleComment = (event) => {
        setComment(event.target.value)
    }

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        navigate('/')
    }


    const getComments = async () => {

        const token = window.localStorage.getItem('token')

        try {
            const response = await api.get(`posts/${params.id}/comments`, {
                headers: {
                    Authorization: token
                }
            }
            )
            setCommentPosts(response.data)


        } catch (error) {

        }
    }

    const postComment = async () => {
        const body = {
            body: comment
        }
        const token = window.localStorage.getItem('token')

        try {
            await api.post(`posts/${params.id}/comments`, body,
                {
                    headers: {
                        Authorization: token

                    }
                }

            )
            alert('Comentário enviado!')
            getComments()

        } catch (error) {
            alert('Erro ao enviar post')
            getComments()
        }
    }

    const postVotePost = async (id) => {
        const token = window.localStorage.getItem('token')
        const body = {
            direction: 1
        }
        try {
            await api.post(`comments/${id}/votes`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }

            )
            alert('Voto computado')
            getComments()

        } catch (error) {
            alert('Erro ao votar')
        }
    }

    const putVotePost = async (id) => {
        const token = window.localStorage.getItem('token')
        const body = {
            direction: -1
        }
        try {
            await api.put(`comments/${id}/votes`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }

            )
            alert('Voto computado')
            getComments()

        } catch (error) {
            alert('Erro ao votar')
        }
    }

    // const delVoteComments = async (id) => {
    //     const token = window.localStorage.getItem('token')

    //     try {
    //         await api.delete(`posts/${id}/votes`,
    //             {
    //                 headers: {
    //                     Authorization: token
    //                 }
    //             }

    //         )
    //         alert('Voto excluído !')
    //         getComments()

    //     } catch (error) {
    //         alert('Erro excluir voto !')
    //     }
    // }



    useEffect(() => {
        getComments()

    }, [])


    const arrayCommentPosts = commentPosts.map((item) => {
        return (
            <CardComment key={item.id}>
                <p className="fontSize">Enviado por: <strong>{item.username}</strong></p>
                <p>{item.body}</p>
                <div>
                    <AiOutlineArrowUp onClick={() => postVotePost(item.id)} size={30} />
                    {item.voteSum}
                    <AiOutlineArrowDown onClick={() => putVotePost(item.id)} size={30} />
                </div>

            </CardComment>
        )
    })



    return (
        <MainContainer>
            <Button style={{ color: grey[900] }} onClick={handleLogout}><strong>Logout</strong></Button>
            <Button style={{ color: grey[900] }} onClick={() => navigate(-1)}><strong>Voltar</strong></Button>
            <TextField multiline onChange={handleComment} value={comment} placeholder="Adicionar comentário..." />
            <Button style={{ color: grey[900] }} onClick={postComment}>Enviar comentário</Button>


            {arrayCommentPosts}


        </MainContainer>
    )
}

export default PostPage