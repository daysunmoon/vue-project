<template>
  <div class="cinemaHeader">
    <MzCinema></MzCinema>
    <MzCinemaList></MzCinemaList>
  </div>
</template>
<script>
import MzCinema from '@/components/MzCinema/Index.vue'
import MzCinemaList from '@/components/MzCinema/CinemaList.vue'
export default {
  components: {
    MzCinema,
    MzCinemaList
  }
}
</script>
<style lang="less">
.cinemaHeader {
  position: relative;
  background: #fff;
  padding-bottom: 49px;
  padding-top: 44px;
}
</style>
