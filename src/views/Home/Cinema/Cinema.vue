<template>
  <div class="cinemaHeader">
    <MzCinema></MzCinema>
    <div class="MzFilmAdress" v-for="item in cinemaList" :key="item._id">
    <div class="MzFilmAdress-item">
        <div class="cinemaName">
          <p>{{ item.name }}</p>
          <span>{{ item.address}}</span>
        </div>
        <div class="distance">
          <span>￥<b>{{ item.price}}</b><em>起</em></span>
          <p>{{ item.distance}}</p>
        </div>
    </div>
</div>
  </div>
</template>
<script>
import MzCinema from '@/components/MzCinema/Index.vue'
import axios from 'axios'
export default {
  data () {
    return {
      cinemaList: []
    }
  },
  created () {
    axios.get('http://localhost:3000/cinema/search', {
      params: {
        pageSize: 10
      }
    }).then(res => {
      let data = res.data
      if (data.code === 0) {
        this.cinemaList = data.data
      }
    })
  },
  components: {
    MzCinema
  }
}
</script>
<style lang="less">
.cinemaHeader {
  position: relative;
  background: #fff;
  padding-bottom: 49px;
  padding-top: 93px;
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
      }
    }
    .distance {
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      span {
        color: #ff5f16;
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
</style>
