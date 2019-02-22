<template>
    <div class="film-item">
        <div class="top">
            <i class="iconfont icon-zuo" @click="toleft"></i>
            <p>{{ detailList.name }}</p>
            <p></p>
        </div>
        <div class="filmImg">
            <img :src="detailList.imgUrl" alt="">
        </div>
        <div class="info">
            <div class="title">
                <div>{{ detailList.name }}<i class="D">2D</i></div>
                <span><i class="pingfen">7.9</i>分</span>
            </div>
            <div class="category grey-text">科幻</div>
            <div class="premieretime grey-text">2019-02-05上映</div>
            <div class="runtime grey-text"><i>{{ detailList.country }}</i>  | <i>{{ detailList.time }}分钟</i></div>
            <div class="introduction grey-text">太阳即将毁灭，人类在地球表面建造出巨大的推进器，寻找新家园。然而宇宙之路危机四伏，为了拯救地球，为了人类能在漫长的2500年后抵达新的家园，流浪地球时代的年轻人挺身而出，展开争分夺秒的生死之战。</div>
        </div>
        <div class="actor">
            <div class="actor-person">演职人员</div>
            <div class="actors">
                <div class="actors-item">
                    <img src="https://pic.maizuo.com/usr/movie/88357f5dd8a4e3736863f0dd04126b3b.jpg?x-oss-process=image/quality,Q_70" alt="">
                    <div class="actors-name">
                        <span class="actorsName">郭帆</span>
                        <span class="actors-zhiwei">导演</span>
                    </div>
                </div>
                <div class="actors-item">
                    <img src="https://pic.maizuo.com/usr/movie/88357f5dd8a4e3736863f0dd04126b3b.jpg?x-oss-process=image/quality,Q_70" alt="">
                    <div class="actors-name">
                        <span class="actorsName">郭凡</span>
                        <span class="actors-zhiwei">导演</span>
                    </div>
                </div>
                <div class="actors-item">
                    <img src="https://pic.maizuo.com/usr/movie/88357f5dd8a4e3736863f0dd04126b3b.jpg?x-oss-process=image/quality,Q_70" alt="">
                    <div class="actors-name">
                        <span class="actorsName">郭凡</span>
                        <span class="actors-zhiwei">导演</span>
                    </div>
                </div>
                <div class="actors-item">
                    <img src="https://pic.maizuo.com/usr/movie/88357f5dd8a4e3736863f0dd04126b3b.jpg?x-oss-process=image/quality,Q_70" alt="">
                    <div class="actors-name">
                        <span class="actorsName">郭凡</span>
                        <span class="actors-zhiwei">导演</span>
                    </div>
                </div>
                <div class="actors-item">
                    <img src="https://pic.maizuo.com/usr/movie/88357f5dd8a4e3736863f0dd04126b3b.jpg?x-oss-process=image/quality,Q_70" alt="">
                    <div class="actors-name">
                        <span class="actorsName">郭凡</span>
                        <span class="actors-zhiwei">导演</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="still">
          <div class="photos-title">
            <span>剧照</span>
          </div>
          <div class="photos"></div>
        </div>
        <a href="#" class="footer">
          <div class="footer-shop">
            选座购票
          </div>
        </a>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      detailList: []
    }
  },
  created () {
    axios.post('http://localhost:3000/films/find', {
      id: this.$route.params.id
    }).then(res => {
      let data = res.data
      console.log(res)
      if (data.code === 0) {
        this.detailList = data.data
      } else {
        alert('网络异常，请稍后重试')
      }
    })
  },
  methods: {
    toleft () {
      this.$router.push({
        path: '/films'
      })
    }
  }
}
</script>
<style lang="less">
.film-item {
  position: relative;
  height: 100%;
  overflow-x: hidden;
  .top {
    height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 10px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    opacity: 0.5;
  }
  .filmImg {
    height: 211px;
    background: red;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    min-height: 159px;
    padding: 15px;
    background: #fff;
    // padding-top: 12px;
    .title {
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
      font-size: 18px;
      .D {
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
        margin-left: 7px;
      }
      span{
        font-size: 10px;
        color: #ffb232;
        .pingfen{
          font-size: 18px;
          font-style: initial;
        }
      }
    }
    .grey-text {
      font-size: 13px;
      margin-top: 8px;
      color: #797d82;
    }
    .introduction {
      margin-top: 15px;
      height: 38px!important;
      overflow: hidden;
    }
  }
  .actor {
    height: 192px;
    background: #fff;
    margin-top: 10px;

    .actor-person {
      font-size: 16px;
      color: #191a1b;
      padding: 15px;
    }
    .actors {
      height: 127px;
      display: flex;
      box-sizing: border-box;
      overflow-x: auto;
      overflow-y: hidden;
      // overflow-x: hidden;
      .actors-item {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: space-between;
        margin-left: 10px;
        img {
          width: 85px;
          height: 85px;
          display: block;
        }
        .actors-name {
          display: flex;
          box-sizing: border-box;
          flex-direction: column;
          .actorsName {
            padding-top: 10px;
            font-size: 12px;
            color: #191a1b;
            width: 85px;
            height: 18px;
            text-align: center;
          }
          .actors-zhiwei{
            font-size: 10px;
            color: #797d82;
            text-align: center;
          }
        }
      }
    }
  }
  .still {
    margin-top: 10px;
    margin-bottom: 60px;
    background-color:#fff;
    .photos-title{
      height: 62px;
      width: 100%;
      padding: 15px;
      span{
        font-size: 16px;
        text-align: left;
        color: #191a1b;
      }
    }
    .photos{
      height: 115px;
    }
  }
  .footer{
    height: 49px;
    position: fixed;
    bottom: 0px;
    width: 100%;
    .footer-shop {
      height: 49px;
      width: 100%;
      text-align: center;
      background-color: #ff5f16;
      color: #fff;
      font-size: 16px;
      line-height: 49px;
    }
  }
}
</style>
