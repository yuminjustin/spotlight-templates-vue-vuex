/* mutation */
export default {
    setMenu(state, res) {
        state.menu = Object.assign([], state.menu, res.data.data)
    },
    setUserInfo(state, res) {
        state.userInfo = Object.assign({}, state.userInfo, res.data.data)
    },
    setList(state, res) {
        state.list = Object.assign([], state.list, res.data.data)
    }
}