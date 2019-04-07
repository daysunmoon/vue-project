// 仓库文件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    curCityName: '',
    cityData: [],
    curCityId: '',
    locationCity: '定位失败'
  },
  getters: {
    filterCityData (state) {
      let letter = {}
      let i = 0
      let res = []
      state.cityData.forEach(ele => {
        let firstLetter = ele.pinyin.substr(0, 1).toUpperCase()
        if (letter[firstLetter]) {
          let index = letter[firstLetter] - 1
          res[index].list.push(ele)
        } else {
          letter[firstLetter] = ++i
          let obj = {}
          obj.py = firstLetter
          obj.list = [ele]
          res.push(obj)
        }
      })
      let temp = res.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
      return temp
    },
    filterIshot (state) {
      let hotCity = []
      state.cityData.forEach(ele => {
        if (ele.isHot === 1) {
          hotCity.push(ele)
        }
      })
      return hotCity
    }
  },
  mutations: {
    /**
     * 修改curCityName
     * @param {Object} state
     * @param {Object} payload
     */
    chgCityName (state, payload) {
      console.log(payload)
      // state.curCityName = payload.curCityName
      // state.curCityId = payload.curCityId
    },
    chgCityData (state, payload) {
      state.cityData = payload
    }
  },
  actions: {
    getLocation ({ commit, state }) {
      /* eslint-disable */ 
      var myCity = new BMap.LocalCity()
      myCity.get((result) => {
        console.log(result)
        commit('chgCityName', result.name)
        state.locationCity = result.name
      })
    }
  }
})
export default store
