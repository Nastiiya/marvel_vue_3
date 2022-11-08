<template>
  <div>
    <my-input
        placeholder="Searing..." v-model="searchQuery"/>
    <div class="app__btn">
      <my-select v-bind:options="sortOptions" v-model:optionValue="selectedSort"/>
    </div>

    <hero-grid v-bind:heroes="heroes"/>
    <div v-intersection="fetchHeroes" class="observer"></div>
  </div>
</template>

<script>

import axios from "axios"
import md5 from "md5";
import HeroGrid from "@/components/HeroGrid";
import MySelect from "@/components/UI/MySelect";


export default {
  components: {
    MySelect,
    HeroGrid
  },

  data() {
    return {
      publicKey: "9382c062c662d3c6654a8ae07b0af1e3",
      privateKey: "0003b02f63cc55c7eb881b235b849a9e0ff5a2d8",

      heroes: [],
      isHeroesLoading: false,
      currentPage: 0,
      limitPosts: 20,
      totalPage: 0,

      searchQuery: "",
      selectedSort: "",
      sortOptions: [
        {value: "title", name: "Sort by name"},
        {value: "body", name: "Sort by body"}
      ]
    }
  },

  methods: {
    async fetchHeroes() {
      try {
        this.currentPage += 1;

        const timestamp = Date.now();
        const secretString = timestamp + this.privateKey + this.publicKey;
        setTimeout(async () => {
          const response = await axios.get('https://gateway.marvel.com:443/v1/public/characters', {
            params: {
              apikey: this.publicKey,
              ts: timestamp,
              hash: md5(secretString),
              limit: this.limitPosts,
              offset: this.limitPosts * (this.currentPage - 1)
            }
          });
          this.heroes = [...this.heroes, ...response.data.data.results];
          console.log(this.heroes)
          this.totalPage = Math.ceil(response.data.data.total / this.limitPosts)
        }, 1000)
      } catch (e) {
        alert("Error")
      }
    }
  },


  mounted() {

  },

  watch: {
    selectedSort(value) {
      console.log(value)
    }
  },
  computed: {}
}
</script>


<style>

.app__btn {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.observer {
  height: 30px;
  background: rosybrown;
}
</style>