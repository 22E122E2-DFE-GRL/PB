<template>
  <main>
    <h1>Lista de Produtos</h1>
    <ul>
      <NuxtLink :to="'/produtos/' + prod.id" v-for="prod in produtos" :key="prod.id">
        <li>
          {{ prod.nome }}
        </li>
      </NuxtLink>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      produtos: [
        { id: 1, nome: "Caneta" },
        { id: 2, nome: "Caneta" },
        { id: 3, nome: "Caneta" },
        { id: 4, nome: "Caneta" },
        { id: 5, nome: "Caneta" },
        { id: 6, nome: "Caneta" },
        { id: 7, nome: "Caneta" },
      ],
    };
  },
};
</script>

<style>
</style>