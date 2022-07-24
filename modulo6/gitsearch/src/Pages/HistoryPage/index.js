import { useEffect, useState } from "react";
import { ConstainerIcon, ImageIcon, MainContainer } from "../HomePage/style";
import iconGit from '../../Img/iconGit.png';
import { ContainerContCont, ContainerContents, ContainerMainContents, ContainerMapArr, ContainerUserInfo, ContentIconBack, IconBackContent, IconHistory, ImgIconHistory, StyledMapArr } from "./style";
import { UserInfo } from "../../Components/userInfo";
import { getUserRequest } from "../../Services/getUserRequest";
import IconHistoryIMG from '../../Img/IconHistory.png'
import IconBacks from '../../Img/IconBack.png'
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../Routes/Coordinator";


const HistoryPage = () => {

    const [arr, setArr] = useState([])
    const [user, setUser] = useState({})

    const navigate = useNavigate()

    const onCLickHistory = (searcherUser) => {
        getUserRequest(setUser, searcherUser)
    }

    useEffect(() => {
        setArr(JSON.parse(localStorage.getItem('items')))
    }, [])

    const mapArr = arr.map((item) => {
        return (
            <ContainerMapArr key={item.id} onClick={() => onCLickHistory(item.name)}>
                <IconHistory>
                    <ImgIconHistory src={IconHistoryIMG} />
                    {item.name}
                </IconHistory>


            </ContainerMapArr>


        )
    })

    return (
        <MainContainer>

            <ConstainerIcon>
                <h1>GitHub Search History</h1> 
                <ImageIcon src={iconGit} />                
                                
                             
                
            </ConstainerIcon>
            
            
            <ContentIconBack>
            
            <IconBackContent onClick={() => goToHomePage(navigate)}  src={IconBacks}/>
            </ContentIconBack>
            

            <ContainerContCont>
                <ContainerMainContents>
                    <StyledMapArr>
                        <h3>Histórico de pesquisa</h3>
                        {mapArr}



                    </StyledMapArr>

                </ContainerMainContents>
            </ContainerContCont>

            <ContainerUserInfo>
                <UserInfo userGit={user} />
            </ContainerUserInfo>





        </MainContainer>

    )

}

export default HistoryPage