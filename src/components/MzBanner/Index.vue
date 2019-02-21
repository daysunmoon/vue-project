<template>
<div>
   <div class="swiper-container mz-banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item._id"><img :src="item.imgUrl" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
  <div class="banner-city" @click="city">
    <span>深圳</span>
    <i class="iconfont icon-tubiao-"></i>
  </div>
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
      this.mySwiper = new Swiper(".swiper-container", {
        autoplay: true,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      })
      /* eslint-enable */
    },
    city () {
      this.$router.push({
        path: '/city'
      })
    }
  },
  created () {
    axios.get('http://localhost:3000/banner/search', {
      params: {
        pageSize: 10
      }
    })
      .then(res => {
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
  mounted () {}
}
</script>

<style lang="less">
.mz-banner {
  height: 210px;
  img {
    width: 100%;
    height: 100%;
  }
}
.banner-city {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  z-index: 10;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
}
</style>
