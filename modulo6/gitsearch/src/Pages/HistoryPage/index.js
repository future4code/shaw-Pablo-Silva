import { useEffect, useState } from "react";
import { ConstainerIcon, ImageIcon, MainContainer } from "../HomePage/style";
import iconGit from '../../Img/iconGit.png';
import { ContainerMainContents, StyledMapArr } from "./style";


const HistoryPage = () => {

    const [arr, setArr] = useState([])


    useEffect(() => {
        setArr(JSON.parse(localStorage.getItem('items')))
    }, [])

    const mapArr = arr.map((item) => {
        return (
            <div key={item.id}>


                {item.name}




            </div>

        )
    })

    return (
        <MainContainer>

            <ConstainerIcon>
                <h1>GitHub Search History</h1>
                <ImageIcon src={iconGit} />
            </ConstainerIcon>

            <ContainerMainContents>
                <StyledMapArr>

                    {mapArr}
                    
                </StyledMapArr>

            </ContainerMainContents>




        </MainContainer>

    )

}

export default HistoryPage