<template>
  <div class="grid__card" @click="$router.push(`/comics/${comics.id}`)">
    <img class="grid__img" v-bind:src="`${this.comics.thumbnail.path}/portrait_fantastic.${this.comics.thumbnail.extension}`" alt="comics">
    <div class="grid__title">
      <strong>{{ comics.title }}</strong>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    comics: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss">



</style>