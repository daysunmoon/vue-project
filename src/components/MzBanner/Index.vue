<template>
    <div class="swiper-container mz-banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item._id"><img :src="item.imgUrl" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      bannerList: [],
      mySwiper: null
    }
  },
  methods: {
    initSwiper () {
      /* eslint-disable */
      this.mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
    /* eslint-enable */
    }
  },
  created () {
    axios.get('http://localhost:3000/banner/search', {
      params: {
        pageSize: 10
      }
    }).then((res) => {
      let data = res.data
      if (data.code === 0) {
        this.bannerList = data.data
        this.$nextTick(() => {
          this.initSwiper()
        })
      } else {
        alert('网络异常，请稍后重试')
      }
    })
  },
  mounted () {
  }
}
</script>

<style lang="less">
  .mz-banner {
    height: 210px;
    img{
        width: 100%;
        height: 100%;
    }
  }
</style>
