import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        screenWidth: document.body.clientWidth,
        footerHeight: document.body.clientWidth > 767 ? 98 : 198,
        navs: [{
            name: '首页',
            url: '/',
            img: 'nav-bg.png',
            active: true
        }, {
            name: '翻译服务',
            url: '/translation',
            active: false
        }, {
            name: '搜索译者',
            url: '/translator',
            active: false
        }, {
            name: '网文出海',
            url: '/article',
            active: false
        }, {
            name: '联系我们',
            url: '/contact',
            active: false
        }]
    },
    mutations: {
        SET_SCREENWIDTH(state, res) {
            state.screenWidth = res
        },
        SET_FOOTERHEIGHT(state, res) {
            state.footerHeight = res
        }
    },
    actions: {
        screenWidth: ({ commit }, param) => {
            commit('SET_SCREENWIDTH', param)
        },
        footerHeight: ({ commit }, param) => {
            commit('SET_FOOTERHEIGHT', param)
        },
    }
})