const SET_MATCHES = (state, data) => {
    state.matches = data
}
const STORE_BET = (state, data) => {
    state.bet = data
}
const ERASE_BET = (state, data) => {
    state.bet = data.map(function (item) {
        item.visiting_team_goals = 0
        item.sending_team_goals = 0
        return item
    })
}

export {
    SET_MATCHES,
    STORE_BET,
    ERASE_BET
}