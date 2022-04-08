import React from 'react'
import axios from 'axios'
import AddMusic from './AddMusicas'



export default class Playlist extends React.Component {
    state = {
        name: '',
        playlist: [],
        search: '',
        music: []

    }

    handlePlaylist = event => {
        const newPlaylist = event.target.value
        this.setState({ name: newPlaylist })
    }

    createPlaylist = () => {
        const axiosConfig = {
            headers: {
                Authorization: 'Pablo-Andrade-Shaw'
            }
        }
        const body = {
            name: this.state.name
        }

        axios
            .post(
                'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
                body,
                axiosConfig

            )

            .then(() => {
                alert(`Playlist ${this.state.name} foi adicionada :)`)
                this.setState({ name: '' })


            })

            .catch(error => {
                alert('Erro ao criar playlist :(')
            })

    }

    getAllTrack = (id) => {
        const axiosConfig = {
            headers: {
                Authorization: 'Pablo-Andrade-Shaw'
            }
        }



        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
                axiosConfig)

            .then((res) => {
                console.log(res.data);
                this.setState({ music: res.data.result.tracks })



            })
            .catch(error => {

            })

    }

    getPlaylist = () => {
        const axiosConfig = {
            headers: {
                Authorization: 'Pablo-Andrade-Shaw'
            }
        }

        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
                axiosConfig
            )
            .then((res) => {
                console.log(res);
                this.setState({ playlist: res.data.result.list })

            })
            .catch(error => {
                alert('Erro ao adicionar playlist :(')

            })
    }

    componentDidMount() {
        this.getPlaylist()
    }

    deleteMusic = (musics) => {
        const axiosConfig = {
            headers: {
                Authorization: 'Pablo-Andrade-Shaw'
            }
        }

        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId`,
                axiosConfig
            )
            .then((res) => {
                console.log(res);
                alert(`Música ${this.state.name} foi removida :)`)
                this.setState({ name: '' })

            })
            .catch(error => {
                alert('Erro ao deletar música :(')

            })
    }

    deletePLaylist = (playlist) => {
        const axiosConfig = {
            headers: {
                Authorization: 'Pablo-Andrade-Shaw'
            }
        }

        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`,
                axiosConfig
            )
            .then((res) => {
                console.log(res);
                alert(`Playlist ${this.state.name} foi removida :)`)
                this.setState({ name: '' })

            })
            .catch(error => {
                alert('Erro ao deletar playlist :(')

            })
    }

    searchPlaylist = () => {
        const axiosConfig = {
            headers: {
                Authorization: 'Pablo-Andrade-Shaw'
            }
        }

        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string',
                axiosConfig
            )
            .then((res) => {
                console.log(res);
                this.setState({ search: res.data.result.list })

            })
            .catch(error => {
                alert('Erro ao pesquisar playlist :(')

            })
    }




    render() {
        return (

            <>
                <h1>Vamos criar sua playlist ? :)</h1>

                <input
                    placeholder='Pesquisar playlist'
                    type='text'
                    value={this.state.search}
                    onChange={this.searchPlaylist}
                />

                <button onClick={this.searchPlaylist}>Pesquisar PLaylist</button>

                <input
                    placeholder='Nome da playlist'
                    type='text'
                    value={this.state.name}
                    onChange={this.handlePlaylist}
                />
                <button onClick={this.createPlaylist}>Criar Playlist</button>

                <ul>{this.state.playlist.map(playlists => {
                    return (
                        <li>

                            <p onClick={() => this.getAllTrack(playlists.id)}>{playlists.name}</p>
                            <button onClick={() => this.deletePLaylist(playlists)}>Excluir</button>
                        </li>


                    )
                })}</ul>

                <ul>
                    <li>


                        {this.state.music.map(playlist => {
                            return <li><p>{playlist.name}</p>
                                <p>{playlist.artist}</p>
                                <p>{playlist.url}</p>
                                <button onClick={() => this.deleteMusic(playlist)}>Excluir música</button>
                            </li>


                        },


                        )}
                    </li>
                </ul>


            </>



        )
    }



}