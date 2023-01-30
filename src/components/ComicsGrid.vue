<template>
  <div class="grid" v-if="comicsArray.length > 0">
    <transition-group name="hero-list">
      <comics-card v-bind:comics="comics" v-bind:key="comics.id" v-for="comics in comicsArray"/>
    </transition-group>

  </div>
</template>
<script>

import ComicsCard from "@/components/ComicsCard";

export default {
  components: {ComicsCard},
  props: {
    comicsArray: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>


</style>