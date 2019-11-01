const changeComponent = ({commit}, data) => {
    console.log('getting foo...')
    commit('CHANGE_COMPONENT', data)
}
export {
    changeComponent
}