import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import selectedComponent from './login'
import auth from './auth'
import match from './match'
import bet from './bet'
import news from './news'
import chat from './chat'
import team from './team'
import adm from './adm'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
    const Store = new Vuex.Store({
        modules: {
            // example
            selectedComponent,
            auth,
            match,
            bet,
            news,
            chat,
            team,
            adm
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV
    })

    return Store
}
