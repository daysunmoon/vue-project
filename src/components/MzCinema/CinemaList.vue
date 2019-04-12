<template>
  <div class="cinemaTotal">
    <div class="nav">
      <div>
        <span class="globle">全城</span>
        <i class="iconfont icon-tubiao-"></i>
      </div>
      <div>
        <span class="recent">最近去过</span>
        <i class="iconfont icon-tubiao-"></i>
      </div>
    </div>
    <div class="cinemaList">
      <div class="MzFilmAdress" v-for="item in cinemaList" :key="item.cinemaId">
        <router-link :to="{name:'choiceFilm',params:{id:item.cinemaId}}" class="MzFilmAdress-item">
          <div class="cinemaName">
            <p>{{ item.name }}</p>
            <span>{{ item.address}}</span>
          </div>
          <div class="distance">
            <span>￥<b>{{ item.lowPrice / 100}}</b><em>起</em></span>
            <p>{{ item.Distance ? item.Distance.toFixed(1) : '距离未知'}}m</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      cinemaList: []
    }
  },
  created () {
    axios.get('https://m.maizuo.com/gateway', {
      params: {
        cityId: 440300,
        k: 8849249,
        pageSize: 10
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154815477056027848376790"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      let data = res.data
      if (data.status === 0) {
        this.cinemaList = data.data.cinemas
      }
    })
  }
}
</script>

<style lang="less">
.cinemaTotal{
  padding-top: 49px;
  .nav {
    width: 100%;
    height: 49px;
    background-color: #fff;
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top:44px;
    left: 0;
    div{
      font-size: 14px;
    }
  }
  .cinemaList{
    .MzFilmAdress {
    padding: 15px;
    border-top: 1px solid #ededed;
    z-index: 100;
    }
    .MzFilmAdress-item {
      height: 45px;
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
      .cinemaName {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        width: calc(100% - 65px);
        p {
          color: #191a1b;
          font-size: 15px;
        }
        span {
          color: #797d82;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 12px;
        }
      }
      .distance {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        span {
          color: #ff5f16;
          font-size:11px;
          b {
            font-size: 15px;
            font-weight: normal;
          }
        }
        p {
          color: #797d82;
        }
      }
    }
  }
}
</style>
