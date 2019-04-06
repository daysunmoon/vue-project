<template>
  <section class="filmList-section">
        <div id="main">
            <li v-for="item in filmList" :key="item.filmId">
                <router-link :to="{name:'detail',params:{id:item.filmId}}">
                    <div class="tupian"><img :src="item.poster" alt=""></div>
                    <div class="intro">
                        <div class="name">
                            <span class="filmName">{{ item.name }}</span>
                            <span class="item">{{ item.filmType && item.filmType.name }}</span>
                        </div>
                        <div class="code">
                            <span class="label">观众评分 </span>
                            <span class="grade">{{ item.grade }}</span>
                        </div>
                        <div class="idol">
                            <span class="label">主演：{{ item.actors ? item.actors.map(items => items.name).join(' ') : '暂无主演' }}</span>
                        </div>
                        <div class="timing">
                            <span class="label">中国大陆 | 100分钟</span>
                        </div>
                    </div>
                    <div class="mai">购票</div>
                </router-link>
            </li>
        </div>
        <p v-if="pageNum >= pages" class="more">我是有底线的，别拉拉。</p>
        <a v-else @click="loadMore" class="more">点击加载更多</a>
    </section>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      filmList: [],
      pageSize: 10,
      pageNum: 1,
      total: 0
    }
  },
  computed: {
    pages () {
      console.log(this.total)
      return Math.ceil(this.total / this.pageSize)
    }
  },
  methods: {
    getFilmData () {
      axios
        .get('https://m.maizuo.com/gateway', {
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154815477056027848376790"}',
            'X-Host': 'mall.film-ticket.film.list'
          },
          params: {
            cityId: 440300,
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            type: 1,
            k: 1623602
          }
        })
        .then(res => {
          let data = res.data
          if (data.status === 0) {
            // this.filmList = data.data.films
            this.filmList = this.filmList.concat(data.data.films)
            this.total = data.data.total
          } else {
            alert('网络异常，请稍后重试')
          }
        })
    },
    loadMore () {
      this.pageNum++
      this.getFilmData()
    }
  },
  created () {
    this.getFilmData()
  }
}
</script>

<style lang="less">
.filmList-section {
  padding-bottom: 49px;
  // width: 100%;
  #main {
    // display: flex;
    // flex-direction: column;
    margin-left: 15px;
    li {
      padding: 15px 15px 15px 0;
      height: 94px;
      position: relative;
      a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .tupian {
          width: 66px;
          height: 94px;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .intro {
          font-size: 12px;
          width: calc(100% - 136px);
          padding: 0 10px;
          float: left;
          .filmName {
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .item {
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .idol {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
          .grade {
            color: #ffb232;
            font-size: 14px;
          }
        }
        .mai {
          height: 25px;
          width: 50px;
          color: #ff5f16;
          font-size: 13px;
          text-align: center;
          border-radius: 2px;
          border: 1px solid #ff5f16;
          line-height: 25px;
          float: right;
        }
      }
    }
  }
  .more{
    display: block;
    font-size: 18px;
    width: 100%;
    text-align: center;
    line-height: 14px;
    margin-top: 10px;
    color:#ff5f16;
    border:none;
    // background:#fff;
    padding-bottom:10px;
  }
}
</style>
