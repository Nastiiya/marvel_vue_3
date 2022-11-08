<template>
    <div>
      <input v-bind:value="modelValue" @input="updateInput" class="input" type="text">
    </div>

</template>

<script>
export default {
  name: 'my-input',
  components: {},

  props: {
    modelValue: [String, Number]
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  /*width: 100%;*/
  border: 2px solid rosybrown;
  padding: 10px;
  margin-top: 10px;
}

/*.header{*/
/*  background-image: url('~@/assets/marvel-header.jpeg');*/
/*}*/

</style>