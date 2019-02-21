// 仓库文件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    curCityName: '深圳',
    cityData: []
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
      state.curCityName = payload
    },
    chgCityData (state, payload) {
      state.cityData = payload
    }
  }
})
export default store
