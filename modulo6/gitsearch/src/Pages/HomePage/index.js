import { ConstainerIcon, ContainerInputButton, IconHistory, ImageIcon, ImgIconHistory, MainContainer } from "./style"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import { Button, InputAdornment } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import iconGit from '../../Img/iconGit.png'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { goToHistoryPage } from "../../Routes/Coordinator";
import IconHistoryIMG from '../../Img/IconHistory.png'
import { UserInfo } from "../../Components/userInfo";
import { getUserRequest } from "../../Services/getUserRequest";


const HomePage = () => {

    const [userGit, setUserGit] = useState({})
    const [searchInput, setSearchInput] = useState('')
    const navigate = useNavigate()

    const onChangeSearcheInput = (event) => {
        setSearchInput(event.target.value)
    }

    function setItemLocalStorage() {
        var storage = JSON.parse(localStorage.getItem('items'))
        var items = storage || []
        items.push({ id: uuidv4(), name: searchInput })
        localStorage.setItem('items', JSON.stringify(items))
    }

    function handleSearch() {
        getUserRequest(setUserGit, searchInput)
        setItemLocalStorage()
    }




    return (
        <MainContainer>
            <ConstainerIcon>
                <h1>GitHub Searcher</h1>
                <ImageIcon src={iconGit} />


            </ConstainerIcon>
            <IconHistory>
                <ImgIconHistory src={IconHistoryIMG} onClick={() => goToHistoryPage(navigate)} size={30} />
            </IconHistory>


            <ContainerInputButton>

                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%'

                    }}
                >
                    <TextField
                        onChange={onChangeSearcheInput}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"> </InputAdornment>,
                            style: { color: "black" }
                        }}
                        sx={{
                            "& .MuiInputLabel-root": { color: 'black', opacity: "90%" },
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "black", opacity: "80%", color: "black" }
                            },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": {
                                    borderColor: "black"
                                }
                            },
                            "& .MuiOutlinedInput-root:hover": {
                                "& > fieldset": {
                                    borderColor: "black",
                                    opacity: '90%'
                                }
                            },
                            color: "black"
                        }}

                        fullWidth
                        label="Digite o nome do usuário do GitHub"
                        id="fullWidth" />

                </Box>
                <Button onClick={handleSearch} sx={{ color: 'black' }} endIcon={<SendIcon />}>
                    Enviar
                </Button>
            </ContainerInputButton>


            <UserInfo userGit={userGit} />





        </MainContainer>)

}

export default HomePage