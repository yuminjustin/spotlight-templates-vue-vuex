/* action */
import axios from 'axios'

export default {
    getMenu({ commit }) {
        axios.get('/static/mock/menu.json').then(res => commit('setMenu', res)).catch(err => console.log(err))
    },
    getUserInfo({ commit }) {
        axios.get('/static/mock/user.json').then(res => commit('setUserInfo', res)).catch(err => console.log(err))
    },
    getList({ commit }) {
        axios.get('/static/mock/table.json').then(res => commit('setList', res)).catch(err => console.log(err))
    }
}