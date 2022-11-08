<template>
  <div class="hero-card">
    <div>
      <div>{{hero.id}}</div>
      <div><strong>Name :</strong>{{ hero.name }}</div>
      <div><strong>Description :</strong>{{ hero.description }}</div>
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
  }

}
</script>

<style scoped>
.hero-card {
  padding: 15px;
  border: 2px solid rosybrown;
  margin-top: 15px;
  /*display: flex;*/
  align-items: center;
  /*justify-content: space-between;*/
}

.hero__btns{
  display: flex;
}
</style>