<template>
  <div class="navbar">
    <div class="navbar-desktop" v-if="!mobileView">
      <div v-on:click="$router.push('/')">
        <img class="navbar-desktop__logo" src="@/assets/Marvel_Logo.png"/>
      </div>

      <div class="navbar-desktop__btns">
        <my-button @click="$router.push('/heroes')">Heroes</my-button>
        <my-button @click="$router.push('/about')" style="margin-left: 15px">About us</my-button>
        <my-button @click="$router.push('/about')" style="margin-left: 15px">Movies</my-button>
      </div>
    </div>

    <div class="navbar-mobile" v-if="mobileView">
      <div class="navbar-mobile__icon" v-on:click="showNavbar = !showNavbar">
        <font-awesome-icon v-if="!showNavbar" icon="fa-solid fa-bars"/>
        <font-awesome-icon v-if="showNavbar" icon="fa-solid fa-xmark" />
      </div>

      <div class="navbar-mobile__list" v-bind:class="{'open': showNavbar}">
        <ul>
          <li @click="$router.push('/heroes')">Heroes</li>
          <li @click="$router.push('/about')" >About us</li>
          <li>Movies</li>
        </ul>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  components: {},

  data: () => {
    return {
      mobileView: true,
      showNavbar: false
    }
  },

  methods: {
    showMobileView(){
      this.mobileView = window.innerWidth <= 576;
    }
  },

  created() {
    this.showMobileView();
    window.addEventListener('resize', this.showMobileView);
  }
}
</script>

<style lang="scss">



</style>