import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        images: {
            bg: require('@/assets/img/bg.jpg'),
            case_1: require('@/assets/img/case_1.jpg'),
            case_2: require('@/assets/img/case_2.jpg'),
            case_3: require('@/assets/img/case_3.jpg'),
            sticker_1: require('@/assets/img/sticker_1.jpg'),
        }
    },
    getters: {},
    mutations: {
    },
    actions: {}
})