<template>
  <div @click="$router.push(`/hero/${hero.id}`)" class="grid__card">
    <img class="grid__img" v-bind:src="`${this.hero.thumbnail.path}/portrait_fantastic.${this.hero.thumbnail.extension}`" alt="hero">
    <div class="grid__title">
      <strong>{{ hero.name }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
    }
  },
}
</script>

<style>

</style>