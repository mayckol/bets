import {axiosInstance} from 'boot/axios'
import da from "quasar/lang/da"

const setMessages = ({commit}, data) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post('/messages', {
            requester_id: data
        })
            .then(response => {
                console.log(response.data)
                commit('SET_MESSAGES', response.data)
            })
            .catch(error => {
                console.log(error)
            })
    })
}

const storeMessage = ({commit}, data) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post('/store-messages', {
            msg: data.msg,
            recipient_id: data.recipient_id,
            requester_id: data.requester_id,
        })
            .then(response => {
                console.log(response.data)
                commit('SET_MESSAGES', response.data)
            })
            .catch(error => {
                console.log(error)
            })
    })
}

export {
    setMessages,
    storeMessage
}