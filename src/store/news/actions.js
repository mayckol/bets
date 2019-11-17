import axios from 'axios'

const lastNews = ({commit}) => {

    return new Promise((resolve, reject) => {

        axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCOa-WaNwQaoyFHLCDk7qKIw&maxResults=10&order=date&type=video&key=AIzaSyBQGAh9R5QtTjnxNIrx1yv-1L8lBOa2wnE")
            .then(response => {
                console.log('res')
                console.log(response.data)
                commit('SET_LAST_NEWS', response.data)
            })
            .catch(error => {
                console.log(error)
            })
    })

}

export {
    lastNews,
}