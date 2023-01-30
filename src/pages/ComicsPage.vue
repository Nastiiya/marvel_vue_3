<template>
  <div class="item-page" v-if="Object.keys(this.comics).length !== 0">

    <div class="slick-slider">
      <slick-slider v-bind:slider-comics-array="prepareComicsImages()"/>
    </div>

    <!--    <img class="comics__img" v-bind:src="`${this.comics.thumbnail.path}/portrait_uncanny.${this.comics.thumbnail.extension}`" alt="comics">-->
    <div class="item-page__description">
      <h1>{{ comics.title }}</h1>
      <h3>{{ comics.description }}</h3>

      <p>Format : {{ comics.format }}</p>
      <p>Page number : {{ comics.pageCount }}</p>
      <p>Price : {{ comics.prices[0].price }}</p>
      <!--      <p>Digital price :  {{comics.prices[1].price}}</p>-->
      <div class="comics__btns">
        <my-button @click="getHeroWiki">Wiki</my-button>
        <my-button @click="getHeroDetail" style="margin-left: 20px">Comics</my-button>
      </div>
    </div>

    <creators-titles v-bind:creators-map="prepareCreators()"/>

  </div>
</template>

<script>
import md5 from "md5";
import axios from "axios";
import SlickSlider from "@/components/UI/SlickSlider";
import CreatorsTitles from "@/components/CreatorsTitles";


export default {

  name: "ComicsPage",

  components: {
    SlickSlider,
    CreatorsTitles
  },

  data() {
    return {
      comics: {},
      publicKey: "d4f1051473f4baecd15f474ab5cd009b",
      privateKey: "d48b4e87ad05847dfaca243cad4ecfdf105aeeb8",

    }
  },

  methods: {
    async fetchComicsByID() {
      try {
        const timestamp = Date.now();

        const secretString = timestamp + this.privateKey + this.publicKey;
        let parameters = {
          apikey: this.publicKey,
          ts: timestamp,
          hash: md5(secretString),
        };
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${this.$route.params.id}`, {params: parameters});
        this.comics = response.data.data.results[0]
      } catch (e) {
        alert("Error")
      }
    },

    getHeroWiki() {
      window.open(this.comics.urls[1].url)
    },

    getHeroDetail() {
      window.open(this.comics.urls[0].url)
    },
    //TODO rewrite this functiona with more beautiful code
    prepareComicsImages() {
      // let comicsImagesArray = this.comics.images;
      // for (let i = 0; i < comicsImagesArray.length; i++) {
      //   comicsImagesArray[i]["id"] = i;
      // }

      this.comics.images.map(function (val, index) {
        val["id"] = index
        return val
      });

      return this.comics.images;
    },

    prepareCreators() {
      let creatorsMap = new Map()
      // key - role, value - Array
      //Example:
      //Element 1 key - "Actor", value - ['Stas', 'Nastia']
      //Element 2 key - "Screenplayer", value - ['Vasia']
      // Element N...

      //map.set(key, value) - added value by key
      //map.has(key) - check if map has key
      //map.get(key) - returns value

      let creatorsArray = this.comics.creators.items
      //[{role: "Actor", name: "Stas"}, {role: "Actor", name: "Nastia"}, {role: "Screenplayer", name: "Vasia"}]
      for (let i = 0; i < creatorsArray.length; i++) {
        let creator = creatorsArray[i]
        if (creatorsMap.has(creator.role)) {
          // let valueArray = creatorsMap.get(creator.role)
          // valueArray.push(creator.name)
          // creatorsMap.set(creator.role, valueArray)

          creatorsMap.get(creator.role).push(creator.name)
        } else {
          creatorsMap.set(creator.role, [creator.name])
        }
      }

      return creatorsMap
    }

  },
  mounted() {
    this.fetchComicsByID()
  }
}

</script>

<style lang="scss">


.comics__description {
  padding: 50px;
}

.slick-slider {
  max-width: 300px;
  min-width: 300px;
  overflow: hidden;
  width: 100%;

}

.hero-page {
  display: flex;
  justify-content: space-around;
}


</style>