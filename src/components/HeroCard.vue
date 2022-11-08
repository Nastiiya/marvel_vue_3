<template>
  <div :style='btnStyles' class="hero-card">
    <div>
      <div >{{hero.id}}</div>
      <div><strong>Name :</strong>{{ hero.name }}</div>
    </div>

    <div class="hero__btns">
      <my-button @click="$router.push(`/hero/${hero.id}`)">Open</my-button>
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
  computed: {
    btnStyles() {
      return {
        "background-image": `url(${this.hero.thumbnail.path}/portrait_uncanny.${this.hero.thumbnail.extension})`,
        height: `200px`
      };
    }
  }
}
</script>

<style scoped>
.hero-card {
  border: 2px solid black;
  align-items: center;

}

.hero__btns{
  display: flex;
}

</style>