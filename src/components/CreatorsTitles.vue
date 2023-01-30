<template>
  <div>
    <h2>Creators</h2>
    <div v-bind:key="key" v-for="key in creatorsMap.keys()">
      <h2>{{ key }}</h2>
      <p v-bind:key="name" v-for="name in creatorsMap.get(key)">{{name}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "CreatorsTitles",

  props:{
    creatorsMap : {
      type: Map,
      required: true
    }
  },

  methods: {

  }
}
</script>

<style>

</style>