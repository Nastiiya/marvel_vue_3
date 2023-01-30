<template>
  <!--  TODO REWORK WITH HUOOK-->
  <div class="item-page">
    <div class="item-page__box" v-if="Object.keys(this.hero).length !== 0">
      <img class="item-page__img"
           v-bind:src="`${this.hero.thumbnail.path}/portrait_uncanny.${this.hero.thumbnail.extension}`"
           alt="hero">
      <div class="item-page__description">
        <h1>{{ hero.name }}</h1>
        <h3>{{ hero.description }}</h3>
        <div class="item-page__btns">
          <my-button @click="getHeroWiki">Wiki</my-button>
          <my-button @click="getHeroDetail" style="margin-left: 20px">Comics</my-button>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>


  <div>
    <h1>Comics</h1>
    <my-select v-bind:options="sortOptions" v-model:optionValue="selectedSort" />
    <comics-grid :comics-array="comicsArray"/>
    <div v-intersection="fetchComics" class="observer"></div>

  </div>


</template>

<script>
import md5 from "md5";
import axios from "axios";
import ComicsGrid from "@/components/ComicsGrid";
import MySelect from "@/components/UI/MySelect";


export default {
  components: {
    ComicsGrid,
    MySelect
  },


  data() {
    return {
      hero: {},
      publicKey: "d4f1051473f4baecd15f474ab5cd009b",
      privateKey: "d48b4e87ad05847dfaca243cad4ecfdf105aeeb8",

      currentPage: 0,
      limitComics: 20,
      totalPages: 0,


      comicsArray: [],
      selectedSort: "",
      sortOptions: [
        {value: "title", name: "Sort by name Asc"},
        {value: "-title", name: "Sort by name Desc"},
        {value: "onsaleDate", name: "Onsale date Asc"},
        {value: "-onsaleDate", name: "Onsale date Desc"}
      ]
    }
  },

  methods: {
    async fetchHero() {
      try {
        const timestamp = Date.now();

        const secretString = timestamp + this.privateKey + this.publicKey;
        let parameters = {
          apikey: this.publicKey,
          ts: timestamp,
          hash: md5(secretString),
        };
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${this.$route.params.id}`, {params: parameters});
        this.hero = response.data.data.results[0]
      } catch (e) {
        alert("Error")
      }
    },

    async fetchComics() {
      try {
        this.currentPage += 1;
        const timestamp = Date.now();

        const secretString = timestamp + this.privateKey + this.publicKey;
        let parameters = {
          apikey: this.publicKey,
          ts: timestamp,
          hash: md5(secretString),
          limit: this.limitComics,
          offset: this.limitComics * (this.currentPage - 1),
        };

        if (this.selectedSort !== "") {
          parameters["orderBy"] = this.selectedSort
        }
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${this.$route.params.id}/comics`, {params: parameters});
        this.totalPages = Math.ceil(response.data.data.total / this.limitComics)
        this.comicsArray = [...this.comicsArray, ...response.data.data.results]
      } catch (e) {
        alert("Error")
      }
    },

    getHeroWiki() {
      window.open(this.hero.urls[1].url)
    },

    getHeroDetail() {
      window.open(this.hero.urls[0].url)
    }
  },

  watch: {
    selectedSort(value) {
      this.currentPage = 0;
      this.limitComics = 20;
      this.totalPages = 0;
      this.comicsArray = [];
      this.fetchComics();
    }
  },
  mounted() {
    this.fetchHero()
  },

}

</script>

<style>


</style>