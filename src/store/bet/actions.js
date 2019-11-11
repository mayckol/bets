import {axiosInstance} from 'boot/axios'
import {Loading} from 'quasar'
import {Notify} from 'quasar'
import el from "quasar/lang/el"

Notify.setDefaults({
    position: 'top-right',
    timeout: 2500,
    textColor: 'white',
    actions: [{icon: 'close', color: 'white'}]
})

const setBet = ({commit}, erase = null) => {

    return new Promise((resolve, reject) => {
        axiosInstance.get('bet')
            .then(response => {
                console.log(response.data)
                if (erase) {
                    commit('ERASE_BET', response.data)
                } else {
                    commit('STORE_BET', response.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    })
}

const storeBet = ({commit}, data) => {
    console.log(data)
    Loading.show();
    return new Promise((resolve, reject) => {
        axiosInstance
            .post("bet", {
                data
            })
            .then(response => {
                console.log(response.data)
                commit('STORE_BET', response.data)
                Notify.create({
                    message: 'Aposta realizada!',
                })
                Loading.hide();
            })
            .catch(error => {
                console.log(error)
                Loading.hide();
            })
    })
}

export {
    setBet,
    storeBet
}