<template>
<div>
   <div class="swiper-container mz-banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item._id"><img :src="item.imgUrl" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
  <router-link to="/city" class="banner-city">
    <span>{{ curCityName }}</span>
    <i class="iconfont icon-tubiao-"></i>
  </router-link>
</div>
</template>
<script>
export default {
  data () {
    return {
      bannerList: [],
      mySwiper: null
    }
  },
  computed: {
    curCityName () {
      return this.$store.state.curCityName
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
      });
      /* eslint-enable */
    }
  },
  created () {
    // https://m.maizuo.com/gateway?type=2&cityId=440300&k=3352297
    this.$http
      .get('banner/search', {
        // headers: {
        //   // 配置请求头
        //   'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154815477056027848376790"}',
        //   'X-Host': 'mall.cfg.common-banner'
        // },
        params: {
          pageSize: 10
        }
      })
      .then(res => {
        console.log(res)
        // let data = res.data
        if (res.code === 0) {
          this.bannerList = res.data
          this.$nextTick(() => {
            this.initSwiper()
          })
        } else {
          alert('网络异常，请稍后重试')
        }
      }).catch(err => {
        console.log(err)
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
