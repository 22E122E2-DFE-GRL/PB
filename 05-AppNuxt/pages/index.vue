<template>
  <main>
    <input v-model="user.email" type="email" name="email" id="email" />
    <input v-model="user.senha" type="password" name="password" id="password" />
    <button @click="signin(user)">Acessar</button>

    <p v-if="getMsg">{{ getMsg }}</p>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "IndexPage",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    ...mapActions("Auth", ["signin"]),
  },
  computed: {
    ...mapGetters("Auth", ["getMsg"]),
  },
};
</script>
