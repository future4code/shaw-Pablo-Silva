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
            console.log(response.data);
            setCommentPosts(response.data)


        } catch (error) {
            console.log(error.response)
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
            console.log(error.response)
            alert('Erro ao enviar post')
            getComments()
        }
    }



    useEffect(() => {
        getComments()

    }, [])


    const arrayCommentPosts = commentPosts.map((item) => {
        return (
            <CardComment key={item.id}>
                <p className="fontSize">Enviado por: <strong>{item.username}</strong></p>
                <p>{item.body}</p>
                <div>
                    <AiOutlineArrowUp size={30} />
                    {item.votesum}
                    <AiOutlineArrowDown size={30} />
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