export const state = {
    user: {},
    users: [],
    loading: false,
    msg: null
}

export const mutations = {
    setUser(state, user) {
        state.user = user
    },
    setUsers(state, users) {
        state.users = users
    },
    setLoading(state, loading) {
        state.loading = loading
    },
    setMsg(state, msg) {
        state.msg = msg
    }
}

export const getters = {
    hasCurrentUser(state) {
        return !!state.user.token
    },
    getUsers(state) {
        return state.users
    },
    hasUsers(state) {
        return state.users.length > 0
    },
    currentUser(state) {
        return state.user
    },
    getMsg(state) {
        return state.msg
    }
}

export const actions = {
    async signin(context, user) {
        try {
            context.commit('setLoading', true)
            context.commit('setUser', {})
            context.commit('setMsg', null)
            const res = await fetch('http://localhost:3001/signin', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            if (res.status === 200) {
                res.json()
                    .then(user => context.commit('setUser', user))
                    .catch(err => console.log(err))
            } else {
                const msg = await res.json()
                context.commit('setMsg', msg)
            }
        } catch (error) {
            context.commit('setMsg', error)
        } finally {
            context.commit('setLoading', false)
        }
    },
    async getUsersFromApi(context) {
        try {
            // setTimeout(() => {}, 5000)
            context.commit('setLoading', true)
            context.commit('setUsers', [])
            context.commit('setMsg', null)
            const token = context.state.user.token
            const Authorization = "Bearer " + token
            const res = await fetch('http://localhost:3001/usuarios', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization
                }
            })
            if (res.status === 200) {
                res.json()
                    .then(users => context.commit('setUsers', users))
                    .catch(err => console.log(err))
            } else if (res.status === 401){
                context.commit('setMsg', "Não autorizado.")
            } else {
                const msg = await res.json()
                context.commit('setMsg', msg)
            }
        } catch (error) {
            context.commit('setMsg', error)
        } finally {
            context.commit('setLoading', false)
        }
    },
    async saveUserApi(context, user) {
        try {
            context.commit('setLoading', true)
            context.commit('setMsg', null)
            const token = context.state.user.token
            const Authorization = "Bearer " + token
            const res = await fetch('http://localhost:3001/usuarios', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization
                },
                body: JSON.stringify(user)
            })
            if (res.status === 201) {
                res.json()
                    .then(user => context.commit('setMsg', user))
                    .catch(err => console.log(err))
            } else if (res.status === 401){
                context.commit('setMsg', "Não autorizado.")
            } else {
                const msg = await res.json()
                context.commit('setMsg', msg)
            }
        } catch (error) {
            context.commit('setMsg', error)
        } finally {
            context.commit('setLoading', false)
        }
    }
}
