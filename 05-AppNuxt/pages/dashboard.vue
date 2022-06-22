<template>
  <div>
    <main>
      <h1>Dashboard</h1>
      <button @click="signin(user)">Logar</button>
      <p>Tem alguém logado: {{ hasCurrentUser }}</p>
      <p>Quem está logado: {{ currentUser }}</p>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data(){
    return {
      user: {email: "thi@go.com", senha:"654321"}
    }
  },
  methods: {
    ...mapActions('Auth', ['signin'])
  },
  computed: {
    ...mapGetters('Auth', ['hasCurrentUser', "currentUser"])
  },
  created() {
  }
};
</script>

<style>
</style>