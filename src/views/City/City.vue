<template>
  <div class="mz-city">
    <MzHeader :title="'当前城市-' + curCityName"></MzHeader>

    <div class="lv-indexlist">
      <ul class="lv-indexlist__content" id="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">{{ this.$store.state.locationCity }}</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail" v-for="(item,index) in filterIshot" :key="index" @click="changeCity(item)">
                <div class="city-item-text">{{ item.name }}</div>
              </li>
            </ul>
          </div>
        </div>
        <li class="lv-indexsection" v-for="(item,index) in filterCityData" :key="index" :id="item.py">
          <p class="lv-indexsection__index">{{ item.py }}</p>
          <ul>
            <li v-for="city in item.list" :key="city.cityId" @click="changeCity(city)"> {{ city.name }} </li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li v-for="(item,index) in filterCityData" :key="index" @click="letterScroll(item.py)">{{ item.py }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import MzHeader from '@/components/MzHeader/Index.vue'
import axios from 'axios'
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    MzHeader
  },
  computed: {
    ...mapState([
      'curCityName'
    ]),
    ...mapGetters([
      'filterCityData',
      'filterIshot'
    ])
  },
  // filterCityData () {
  //   return this.$store.getters.filterCityData
  // },
  // filterIshot () {
  //   return this.$store.getters.filterIshot
  // },
  // curCityName () {
  //   return this.$store.state.curCityName
  // }
  methods: {
    letterScroll (py) {
      let el = document.getElementById(py)
      document.getElementById('lv-indexlist__content').scrollTop = el.offsetTop
    },
    changeCity (city) {
      // this.curCityName = city.name
      // this.$store.state.curCityName = city.name
      this.$store.commit('chgCityName', city.name)
      this.$router.push({
        path: '/film'
        // params: {
        //   cityId: this.commit.filterCityData.list.cityId
        // }
      })
    }
  },
  created () {
    axios.get('./json/city.json').then(res => {
      let data = res.data
      if (data.status === 0) {
        // this.$store.state.cityData = data.data.cities
        this.$store.commit('chgCityData', data.data.cities)
      } else {
        alert(data.msg)
      }
    })
  }
}
</script>

<style lang="less">
.mz-city {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 44px;

  .lv-indexlist {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    background: #fff;
    overflow: hidden;
    position: relative;

    &__content {
      flex: 1;
      height: 100%;
      overflow-y: auto;
    }

    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 100%;

      li {
        height: 18px;
        font-size: 12px;
        color: #191a1b;
        padding: 0 6px;
      }
    }

    .lv-indexsection {
      &__index {
        background-color: #f4f4f4;
        color: #797d82;
        padding-left: 15px;
        height: 30px;
        line-height: 30px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 15px;
        margin-bottom: -1px;

        li {
          // @include border-bottom-1px;
          position: relative;
          width: 33.33%;
          height: 48px;
          line-height: 48px;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 14px;
        }
      }
    }

    .recommend-city {
      padding-left: 15px;
      padding-top: 15px;

      .city-index-title {
        font-size: 13px;
        color: #797d82;
        margin-bottom: 10px;
      }

      .city-index-detail {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .city-item-detail {
          width: 33.33%;
          text-align: center;
          padding-bottom: 15px;
          box-sizing: border-box;
          float: left;

          .city-item-text {
            height: 30px;
            line-height: 30px;
            background-color: #f4f4f4;
            border-radius: 3px;
            box-sizing: border-box;
            margin: 0 7.5px;
            font-size: 14px;
            color: #191a1b;
          }
        }
      }
    }
  }
}
</style>
