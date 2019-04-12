<template>
    <div class="film-item">
        <div class="top">
            <i class="iconfont icon-zuo" @click="toleft"></i>
            <p>{{ this.$store.state.filmData.name }}</p>
            <p></p>
        </div>
        <div class="filmImg">
            <img :src="this.$store.state.filmData.poster" alt="">
        </div>
        <div class="info">
            <div class="title">
                <div>{{ this.$store.state.filmData.name }}<i class="D">2D</i></div>
                <span><i class="pingfen">{{ this.$store.state.filmData.grade }}</i>分</span>
            </div>
            <div class="category grey-text">{{ this.$store.state.filmData.category }}</div>
            <div class="premieretime grey-text">2019-02-05上映</div>
            <div class="runtime grey-text"><i>{{ this.$store.state.filmData.nation }}</i>  | <i>{{ this.$store.state.filmData.runtime }}分钟</i></div>
            <div class="introduction grey-text">{{ this.$store.state.filmData.synopsis }}</div>
        </div>
        <div class="actor">
            <div class="actor-person">演职人员</div>
            <div class="actors">
                <div class="actors-item" v-for="(actors,index) in this.$store.state.filmData.actors" :key="index">
                      <img :src="actors.avatarAddress" alt="">
                    <div class="actors-name">
                        <span class="actorsName">{{ actors.name }}</span>
                        <span class="actors-zhiwei">{{ actors.role }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="still">
          <div class="photos-title">
            <span>剧照</span>
          </div>
          <div class="photos">
            <ul>
              <li v-for="(photos,index) in this.$store.state.filmData.photos" :key="index"><img :src="photos" alt=""></li>
            </ul>
          </div>
        </div>
        <div class="footer">
          <router-link to="/selectCinema">
          <div class="footer-shop">
            选座购票
          </div>
        </router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  // data () {
  //   return {
  //     detailList: []
  //   }
  // },
  created () {
    axios.get('https://m.maizuo.com/gateway', {
      params: {
        filmId: this.$route.params.id
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154815477056027848376790"}',
        'X-Host': 'mall.film-ticket.film.info'
      }

    }).then(res => {
      let data = res.data
      if (data.status === 0) {
        this.$store.commit('getFilmData',data.data.film)
        // this.detailList = data.data.film
        // console.log(this.detailList)
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
    // opacity: 0.5;
    font-size: 17px;
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
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
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
      overflow-y: hidden;
      overflow-x: auto;
      ul{
        display: flex;
        padding-left: 15px;
        align-items: center;
        li{
          cursor: pointer;
          display: block;
          float: left;
          min-width:150px;
          margin-right: 10px;
          img{
            width: 100%;
          }
        }
      }
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
