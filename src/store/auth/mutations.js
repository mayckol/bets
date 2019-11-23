export function SET_USERS(state, payload) {
  state.users = payload
}


export function retrieveveToken(state, payload) {
  state.token = payload;
}

export function destroyToken(state) {
  state.token = null;
}

export function setUserEmail(state, payload) {
  state.email = payload
}

export function setUser(state, payload) {
  state.user = payload
}

const SET_FAVORITE_TEAM = (state, payload) => {
  state.user.team_id = payload
}
export {
    SET_FAVORITE_TEAM
}