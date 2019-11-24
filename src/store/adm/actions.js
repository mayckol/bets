import { axiosInstance } from 'boot/axios'
import { mapState } from 'vuex'


const setStatistics = (context, token) => {

    axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
    return new Promise((resolve, reject) => {
        axiosInstance
            .get("statistics")
            .then(response => {
                context.commit("SET_STATISTICS", response.data)
                resolve(response);
            })
            .catch(error => {
                reject(error);
            })
    })
}
export {
    setStatistics
}