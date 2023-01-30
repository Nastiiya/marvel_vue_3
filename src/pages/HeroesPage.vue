<template>
  <div class="header">
    <div class="header__search">
      <my-input  v-model="searchQuery"/>
      <my-button class="header__btn" @click="searchHeroes">
        <font-awesome-icon class="header__icon" icon="fa-solid fa-magnifying-glass" />
      </my-button>
    </div>
<!--    <div class="header__btn">-->
<!--      &lt;!&ndash;      <my-select v-bind:options="sortOptions"&ndash;&gt;-->
<!--      &lt;!&ndash;                 v-model:optionValue="selectedSort"/>&ndash;&gt;-->
<!--    </div>-->
  </div>



    <hero-grid class="grid" v-bind:heroes="heroes"/>
    <div v-intersection="fetchHeroes" class="observer"></div>
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

    }
  },

  methods: {
    async fetchHeroes() {
      try {
        this.currentPage += 1;
        const timestamp = Date.now();
        const secretString = timestamp + this.privateKey + this.publicKey;
        let parameters = {
          apikey: this.publicKey,
          ts: timestamp,
          hash: md5(secretString),
          limit: this.limitPosts,
          offset: this.limitPosts * (this.currentPage - 1),
        };

        if (this.usedSearchQuery !== "") {
          parameters["nameStartsWith"] = this.usedSearchQuery;
        }

        const response = await axios.get('https://gateway.marvel.com:443/v1/public/characters', {params: parameters});
        this.heroes = [...this.heroes, ...response.data.data.results];
        this.totalPage = Math.ceil(response.data.data.total / this.limitPosts)
      } catch (e) {
        alert("Error")
      }
    },

    searchHeroes(event) {
      this.currentPage = 0;
      this.heroes = [];
      this.usedSearchQuery = this.searchQuery;
    }
  },


  mounted() {

  },

  computed: {}
}
</script>


<style>

.observer {
  height: 30px;
  background: rosybrown;
  width: 100%;
}
</style>