export const state = {
    user: {},
    loading: false,
}

export const mutations = {
    setUser(state, user){
        state.user = user
    },
    setLoading(state, loading){
        state.loading = loading
    }
}

export const actions = {
    signin(context, user){
        context.commit('setLoading', true)
        fetch('http://localhost:3001/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
        .then(user => {
            context.commit('setUser', user)
        }).catch(err => console.log(err))
        .finally(_ => context.commit('setLoading', false))
    }
}

export const getters = {
    hasCurrentUser(state){
        return !!state.user.token
    },
    currentUser(state){
        return state.user
    }
}