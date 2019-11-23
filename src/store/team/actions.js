import {axiosInstance} from 'boot/axios'

const setMatches = ({commit}) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get('/matches')
            .then(response => {
                console.log(response.data)
                commit('SET_MATCHES', response.data)
            })
            .catch(error => {
                console.log(error)
            })
    })
}

const lastMatches = ({commit}, teamId) => {

    return new Promise((resolve, reject) => {

        axiosInstance.post("get-last-matches", {
            teamId
        })
            .then(response => {
                console.log('res')
                console.log(response.data)
                commit('SET_LAST_MATCHES', response.data)
            })
            .catch(error => {
                console.log(error)
            })
    })
}

const setFavoriteTeam = (context, data) => {
    return new Promise((resolve, reject) => {
        axios.post('/set-favorite-team', {
            favorite_team: data.favoriteTeam,
        })
            .then(response => {
                console.log(data.favoriteTeam)
                context.commit('changeFavoriteTeam', data.favoriteTeam)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export {
    setMatches,
    lastMatches,
    setFavoriteTeam
}