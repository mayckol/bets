const SET_MATCHES = (state, data) => {
    state.matches = data
}
const SET_LAST_MATCHES = (state, data) => {
    state.lastMatchesByTeam = data
}

export {
    SET_MATCHES,
    SET_LAST_MATCHES
}