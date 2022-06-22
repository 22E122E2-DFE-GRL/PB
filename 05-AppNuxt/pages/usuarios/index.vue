<template>
  <main>
    <h1>Usuários</h1>
    <Nuxt-link to="/usuarios/insert">Inserir</Nuxt-link>
    <p v-if="isLoading">Carregando...</p>
    <table v-if="hasUsers">
      <tr><th>Nome</th><th>email</th></tr>
      <tr v-for="user in getUsers" :key="user._id">
        <td>{{user.nome}}</td>
        <td>{{user.email}}</td>
      </tr>
    </table>
    <p v-else>Nenhum usuário cadastrado.</p>
  </main>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";

export default {
  created() {
    this.getUsersFromApi()
  },
  methods: {
    ...mapActions('Auth', ['getUsersFromApi'])
  },
  computed: {
    ...mapGetters('Auth', ['hasUsers', 'getUsers', 'isLoading'])
  }
};
</script>

<style>
</style>