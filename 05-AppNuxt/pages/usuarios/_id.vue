<template>
  <main>
      <h1>Produto #{{produtoId}}</h1>
  </main>
</template>

<script>
export default {
    data() {
        return {
            produtoId: this.$route.params.id
        }
    }
}
</script>

<style>

</style>