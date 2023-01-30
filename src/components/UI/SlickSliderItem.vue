<template>
  <div>
    <img class="comics__img" v-bind:src="`${this.sliderComicsItem.path}/portrait_uncanny.${this.sliderComicsItem.extension}`" alt="comics">
  </div>
</template>

<script>

export default {
  props: {
    sliderComicsItem: {
      type: Object,
      default: () => {}
    }
  }

}
</script>

<style>

</style>