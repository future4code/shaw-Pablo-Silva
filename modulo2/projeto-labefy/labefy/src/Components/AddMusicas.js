import React from 'react'
import axios from 'axios'


export default class AddMusic extends React.Component {
    state = {
        name: '',
        artist: '',
        url: '',
        music: []

    }


    handleNameChange = event => {
        const newNameValue = event.target.value
        this.setState({ name: newNameValue })
    }

    handleArtistName = event => {
        const newArtistValue = event.target.value
        this.setState({ artist: newArtistValue })
    }

    handleUrl = event => {
        const newUrl = event.target.value
        this.setState({ url: newUrl })
    }


    handleCreateTrack = () => {
        const axiosConfig = {
            headers: {
                Authorization: 'Pablo-Andrade-Shaw'
            }
        }

        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url

        }

        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/7eb7756c-f160-475e-9f5e-a5d2a7da0b8a/tracks`,
                body,
                axiosConfig)

            .then(() => {
                alert(`Música ${this.state.name} do ${this.state.artist} foi adicionada com sucesso ! :)`)
                this.setState({ name: '', artist: '', url: '' })

            })
            .catch(error => {
                alert('Erro ao adicionar música')
            })

    }



    render() {
        return (
            <>

                <h3>Vamos adicionar suas músicas também ?</h3>
                <input
                    placeholder='Nome da música'
                    type='text'
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />

                <input
                    placeholder='Nome do artista'
                    type='text'
                    value={this.state.artist}
                    onChange={this.handleArtistName}
                />

                <input
                    placeholder='Url da música'
                    type='text'
                    value={this.state.url}
                    onChange={this.handleUrl}
                />

                <button onClick={this.handleCreateTrack}>Adicionar música</button>
                <button onClick={this.deleteMusic}>Remover música</button>



            </>
        )
    }


}