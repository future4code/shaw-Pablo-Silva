import api from "./api"


export const getUserRequest = async (setUserGit, searchInput) => {

    try {
        const response = await api.get(`${searchInput}`)
        setUserGit(response.data)


    } catch (error) {

        alert('Erro ao pesquisar usuário !')

    }
}