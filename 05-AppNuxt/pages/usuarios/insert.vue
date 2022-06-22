<template>
  <main>
      <input v-model="user.nome" type="text" name="nome" id="nome">
      <input v-model="user.email" type="email" name="email" id="email">
      <input v-model="user.senha" type="password" name="senha" id="senha">
      <button @click="saveUserApi(user)">Salvar</button>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            user: {}
        }
    },
    methods: {
        ...mapActions('Auth', ['saveUserApi'])
    }
}
</script>

<style>

</style>