export function loggedIn(state) {
  return state.token !== null;
}
export function tokenUser(state) {
  return state.token;
}
