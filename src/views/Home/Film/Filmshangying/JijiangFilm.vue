<template>
  <section class="filmList-section">
        <div id="main">
            <li v-for="item in filmList" :key="item._id">
                <router-link :to="{name:'detail',params:{id:item._id}}">
                    <div class="tupian"><img :src="item.imgUrl" alt=""></div>
                    <div class="intro">
                        <div class="name">
                            <span class="filmName">{{ item.name }}</span>
                            <span class="item">2D</span>
                        </div>
                        <div class="code">
                            <span class="label">观众评分 </span>
                            <span class="grade">{{ item.score }}</span>
                        </div>
                        <div class="idol">
                            <span class="label">{{ item.starring }}</span>
                        </div>
                        <div class="timing">
                            <span class="label">中国大陆 | 100分钟</span>
                        </div>
                    </div>
                    <div class="mai">预购</div>
                </router-link>
            </li>
        </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      filmList: []
    }
  },
  created () {
    axios
      .get('http://localhost:3000/films/search', {
        params: {
          pageSize: 10
        }
      })
      .then(res => {
        let data = res.data
        if (data.code === 0) {
          this.filmList = data.data
        } else {
          alert('网络异常，请稍后重试')
        }
      })
  }
}
</script>

<style lang="less">
.filmList-section {
  display: flex;
  flex: 1;
  overflow: auto;
  #main {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    li {
      padding: 15px 15px 15px 0;
      height: 94px;
      position: relative;
      a {
        display: flex;
        align-items: center;
        .tupian {
          width: 66px;
          height: 94px;
          // float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .intro {
          font-size: 12px;
          width: 150px;
          // width: calc(100% - 116px);
          padding: 0 10px;
          .filmName {
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
          }
          .item {
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
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
        }
      }
    }
  }
}
</style>
