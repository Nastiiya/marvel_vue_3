<template>
  <div class="navbar">
    <div v-on:click="$router.push('/')">
      <img class="navbar__logo" src="@/assets/Marvel_Logo.png"/>
    </div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/heroes')">Heroes</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px">About us</my-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
.navbar{
  height: 50px;
  background-color: black;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}

.navbar__logo{
  width: 100px;
}

</style>