const CHANGE_COMPONENT = (state, data) => {
    console.log(state)
    console.log(data)
    state.formComponent = data
}

export {
    CHANGE_COMPONENT
}