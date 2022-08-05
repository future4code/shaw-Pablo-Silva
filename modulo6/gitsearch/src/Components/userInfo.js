import moment from "moment"
import { Image } from "../Pages/HomePage/style"


export const UserInfo = ({ userGit }) => {

    const DateFormat = moment(userGit.created_at).format('DD/MM/YYYY')

    return (

        <>
            <h3>{userGit.name}</h3>
            <Image src={userGit.avatar_url} />
            <p>{userGit.email}</p>
            <h5>{userGit.bio}</h5>

            {
                userGit.name ? (<>
                    <p>Repositórios públicos: {userGit.public_repos}</p>
                    <a href={userGit.html_url} target="_blank">Para saber mais, clique aqui</a>
                    <p>Usuário desde: {DateFormat}</p>
                </>
                ) : (<p></p>)

            }
        </>
    )
}


