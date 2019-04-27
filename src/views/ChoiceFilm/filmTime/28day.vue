<template>
  <div class="schedule-list">
    <div class="filmTimeList" v-for="(item,index) in filmTimeList" :key="index">
      <router-link :to="{name:'choiceChair',params:{id:item.scheduleId}}" class="schedule-item">
        <div class="left">
          <div class="start-at">22:45</div>
          <div class="end-at">{{item.endAt}}散场</div>
        </div>
        <div class="middle">
          <div class="language">{{ item.filmLanguage }}{{ item.imagery }}</div>
          <div class="hall">{{ item.hallName }}</div>
        </div>
        <div class="right">
          <div class="buy-ticket">购票</div>
          <div class="lowest-price">
            <span class="price-icon">￥</span>{{ item.salePrice / 100 }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      filmTimeList: ''
    }
  },
  created () {
    axios
      .get('https://m.maizuo.com/gateway', {
        params: {
          filmId: 4588,
          cinemaId: 8506,
          date: 1556380800,
          k: 1259483
        },
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"1.0.0","e":"1553930407734439407655"}',
          'X-Host': 'mall.film-ticket.schedule.list'
        }
      })
      .then(res => {
        let data = res.data
        if (data.status === 0) {
          this.filmTimeList = data.data.schedules
          console.log(this.filmTimeList)
        } else {
          alert('网络异常，请稍后重试')
        }
      })
  }
}
</script>
<style lang="less">
.schedule-list {
  min-height: calc(100vh - 44px);
  .filmTimeList {
    // margin-bottom: 15px;
    height: 74px;
  }
  .schedule-item {
    height: 74px;
    width: 100%;
    padding: 15px;
    // position: relative;
    background: #fff;
    .left {
      float: left;
      width: 100px;
      .start-at {
        font-size: 15px;
        color: #191a1b;
      }
      .end-at {
        font-size: 13px;
        color: #797d82;
        margin-top: 2px;
      }
    }
    .middle {
      float: left;
      width: calc(100% - 240px);
      .language {
        font-size: 15px;
        color: #191a1b;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .hall {
        font-size: 13px;
        color: #797d82;
        margin-top: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .right {
      float: right;
      padding: 10px 0;
      line-height: 25px;
      color: #ff5f16;
      .buy-ticket {
        float: right;
        height: 25px;
        width: 50px;
        border-radius: 2px;
        position: relative;
        text-align: center;
      }
      .lowest-price {
        float: right;
        padding-right: 20px;
        font-size: 15px;
        .price-icon {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
