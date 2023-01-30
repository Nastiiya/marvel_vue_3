<template>
  <div v-if="heroes.length > 0">
    <transition-group name="hero-list">
      <hero-card v-bind:hero="hero" v-bind:key="hero.id" v-for="hero in heroes"/>
    </transition-group>
  </div>
</template>
<script>

import HeroCard from "@/components/HeroCard";

export default {
  components: {HeroCard},
  props: {
    heroes: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>


/*.hero-list-item {*/
/*  display: inline-block;*/
/*  margin-right: 10px;*/
/*}*/
/*.hero-list-enter-active,*/
/*.hero-list-leave-active {*/
/*  transition: all 0.4s ease;*/
/*}*/
/*.hero-list-enter-from,*/
/*.hero-list-leave-to {*/
/*  opacity: 0;*/
/*  transform: translateY(30px);*/
/*}*/
/*.hero-list-move {*/
/*  transition: transform 0.2s ease;*/
/*}*/
</style>