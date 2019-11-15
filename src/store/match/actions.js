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

export {
    setMatches,
    lastMatches,
}