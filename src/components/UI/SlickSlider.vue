<template>
  <div class="slider-wrapper" >
    <div class="arrow-wrapper">
      <div @click="prevSlide" class="arrow arrow-right"/>
      <div  @click="nextSlide"  class="arrow arrow-left"/>
    </div>
    <div class="slider-wrapper__images" :style="{'margin-left': '-'+ (100 * currentSlide) + '%'}">
      <slick-slider-item
          v-for="comicsItem in sliderComicsArray"
          v-bind:slider-comics-item="comicsItem"
          v-bind:key = "comicsItem.id"
      />
    </div>



    </div>



</template>

<script>
import SlickSliderItem from "@/components/UI/SlickSliderItem";


export default {

  data() {
    return {
      currentSlide: 0
    }
  },

  components: {
    SlickSliderItem
  },

  props: {
    sliderComicsArray: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },

    nextSlide() {
      if (this.currentSlide >= this.sliderComicsArray.length - 1) {
        this.currentSlide = 0
      } else {
        this.currentSlide++
      }
    }
  }
}

</script>

<style lang="scss">

.slider-wrapper{
  position: relative;
}

.slider-wrapper__images{
  display: flex;
}

.arrow-wrapper{
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 50%;


}
.arrow {
  display: inline-block ;
  width: 25px;
  height: 25px;
  border-top: 3px solid #a7a7a7;
  border-left: 3px solid #a7a7a7;
  margin: 10px 20px 10px 20px;
  color: white;
}
.arrow-right {
  transform: rotate(-45deg);
}

.arrow-left{
  transform: rotate(135deg);
}
.slider-btn{
  z-index: 1;
}
</style>