<template>
  <div class="choiceChair">
    <header>
      <div class="left">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAMAAACRK2tAAAAAkFBMVEVHcEwcHBwZGhsaGhwZHBwqKioZGhv///8bGxs/Pz8ZGhseHh4eHh4cHBwZGxsaGhsZGxsfHx8ZGhwZGhsZGhsdHR0ZGhsZGhsaGhwbGxsZGhsbGxsZGxseHh4ZGxsZGhsaGhskJCQZGxsaGhwZGxsZGhwaGhwZGhwZGhsZHh4fHx8aGhsZGhsZGhsZGhsZGhteFmxMAAAAL3RSTlMAEv1YdgzJAUsE+hkhP5WksQi+0/c08uWGStxnZirs3c0HsoeWo4W91DMp6+T28faGh4gAAADjSURBVDjLxZXZkoJADEUbVxBQlG1AYRZ3Z/T8/9/5gK9JqgZL83puVVd3TjrO/bumfjVVA3PwNf4BVAofAXvliA2QBDIfDuD4LXN/BpOxzOMMUk/meQF1KPOmhb9I5lEJvxeZhzXczjL3UrjGMh9PYKZ0YLmCwVDmQQJsFAEWwEgXgIMhwNwQYNFTgNXyfQK4Lygj1yeQF/CpHeHiDE6elrCuaT+Uc2vgJ3A9mtW1e2f9GGzVP8dSrpN2rSUs7e3B6UYvi7VEWEORa4mohLbREk37HD3Sl+iRPEGPqtdCsVfSo+6AByDPg79r1AAAAABJRU5ErkJggg==" width="11px" height="18px" alt="">
      </div>
      <div class="title">
        <div>深圳百川影城IMAX新沙天虹店</div>
      </div>
      <div class="right"></div>
    </header>
    <div class="info">
      <div class="film-name">{{ this.$store.state.filmData.name }}</div>
      <div class="film-des">周六04月06日 18:30 原声2D</div>
      <div class="film-limit"></div>
    </div>
    <div class="seating-chart-wrap">
      <div class="seating-chart">
        <div class="screen" style="transform: scale(1.035); left: 69.3173px;">六桂福珠宝(8号爱的城堡厅)</div>
        <div class="axion-y" style="transform: translateY(78.4963px) scale(1, 1.035);">
          <div class="rowName">A</div>
          <div class="rowName">B</div>
          <div class="rowName">C</div>
          <div class="rowName">D</div>
          <div class="rowName">E</div>
          <div class="rowName">F</div>
          <div class="rowName">G</div>
          <div class="rowName">H</div>
        </div>
        <div class="map">
          <div data-v-c07dfd94="" class="axion-middle" style="height: 200px;"></div>
          <div class="seats">
            <div class="seat" v-for="(item,index) in chair" :key="index" :style="{left:item.left + 'px',top:item.top + 'px'}" :class="{checkedSeat : item.ischecked === true} "  @click="checkedChair(index)">
              <div class="single">
                <div class="normal">
                  <svg aria-hidden="true" class="icon">
                    <use xlink:href="#icon-weixuanze">
                      <svg id="icon-weixuanze" viewBox="0 0 1024 1024" width="100%" height="100%">
                        <path d="M859.2 248h65c20.2 0 36.6 16.4 36.6 36.6v531c0 20.2-16.4 36.6-36.6 36.6h-46.5c-4.7 0-8.5 3.8-8.5 8.5v28.2c0 20.2-16.4 36.6-36.6 36.6H191.4c-20.2 0-36.6-16.4-36.6-36.6v-28.2c0-4.7-3.8-8.5-8.5-8.5H99.8c-20.2 0-36.6-16.4-36.6-36.6v-531c0-20.2 16.4-36.6 36.6-36.6h65v-84.7c0-37.4 30.3-67.8 67.8-67.8h559c37.4 0 67.8 30.3 67.8 67.8V248z" fill="#FFFFFF"></path>
                        <path d="M924.2 248c20.2 0 36.6 16.4 36.6 36.6v531c0 20.2-16.4 36.6-36.6 36.6h-46.5c-4.7 0-8.5 3.8-8.5 8.5v28.2c0 20.2-16.4 36.6-36.6 36.6H191.4c-20.2 0-36.6-16.4-36.6-36.6v-28.2c0-4.7-3.8-8.5-8.5-8.5H99.8c-20.2 0-36.6-16.4-36.6-36.6v-531c0-20.2 16.4-36.6 36.6-36.6h73.4v16.9H99.8c-10.9 0-19.7 8.8-19.7 19.7v531c0 10.9 8.8 19.7 19.7 19.7h46.5c14 0 25.4 11.4 25.4 25.4v28.2c0 10.9 8.8 19.7 19.7 19.7h641.2c10.9 0 19.7-8.8 19.7-19.7v-28.2c0-14 11.4-25.4 25.4-25.4h46.5c10.9 0 19.7-8.8 19.7-19.7v-531c0-10.9-8.8-19.7-19.7-19.7h-72.7V248h72.7z m0 0c20.2 0 36.6 16.4 36.6 36.6v531c0 20.2-16.4 36.6-36.6 36.6h-46.5c-4.7 0-8.5 3.8-8.5 8.5v28.2c0 20.2-16.4 36.6-36.6 36.6H191.4c-20.2 0-36.6-16.4-36.6-36.6v-28.2c0-4.7-3.8-8.5-8.5-8.5H99.8c-20.2 0-36.6-16.4-36.6-36.6v-531c0-20.2 16.4-36.6 36.6-36.6h73.4v16.9H99.8c-10.9 0-19.7 8.8-19.7 19.7v531c0 10.9 8.8 19.7 19.7 19.7h46.5c14 0 25.4 11.4 25.4 25.4v28.2c0 10.9 8.8 19.7 19.7 19.7h641.2c10.9 0 19.7-8.8 19.7-19.7v-28.2c0-14 11.4-25.4 25.4-25.4h46.5c10.9 0 19.7-8.8 19.7-19.7v-531c0-10.9-8.8-19.7-19.7-19.7h-72.7V248h72.7z" fill="#BDC0C5"></path>
                        <path d="M232.5 112.5c-28.1 0-50.8 22.8-50.8 50.8v592.8c0 9.4 7.6 16.9 16.9 16.9h626.7c9.4 0 16.9-7.6 16.9-16.9V163.3c0-28.1-22.8-50.8-50.8-50.8H232.5z m0-17h559c37.4 0 67.8 30.3 67.8 67.8v592.8c0 18.7-15.2 33.9-33.9 33.9H198.7c-18.7 0-33.9-15.2-33.9-33.9V163.3c0-37.4 30.3-67.8 67.7-67.8z" fill="#BDC0C5"></path>
                      </svg>
                    </use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="phone-input" data-enter-time="1554540233" style="display: none;" data-click-fun="track_f_150445">
      <span data-v-183817e5="">手机号：</span>
      <span data-v-183817e5="" class="num">15036974592</span>
      <img data-v-183817e5="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAP1BMVEVHcEx8goJ5foN6foJ5hYV5fYJ6fYN6fYJ5foN5fYN5fYJ6fYR6fYR5fYJ6f4R5fYJ/f7+IiIh/f5F5fYN5fYIESO1EAAAAFHRSTlMALWWBFf6jkm3U+UtR5TS5BA8OivVX9aEAAAB6SURBVCjP1dJJFoQgDEXRB0pjX032v9YaYEkMugDf9B7C5APOZ9UKAP32hS6IbikyyIYLY0yqeZehx0vEVoQs6UYu6C8tHdJQFUtKDB0yL+uZ6psk+UTves3SVP+x9Jo+3JDq8XQ1ACCKb2ZTimNwzdj2Qgd2oiXv4Adk4gv+2l0OrwAAAABJRU5ErkJggg==" width="13px" height="13px" alt="" class="phone-editor">
    </div>
    <div class="confirm-btn disable" @click="chairOK">确认选座</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      /* eslint-disable */
      chair: [
      { chairId: 'A1', ischecked: false, left: 125, top: 0 },
      { chairId: 'A2', ischecked: false, left: 150, top: 0 },
      { chairId: 'A3', ischecked: false, left: 175, top: 0 },
      { chairId: 'A4', ischecked: false, left: 200, top: 0 },
      { chairId: 'A5', ischecked: false, left: 225, top: 0 },
      { chairId: 'A6', ischecked: false, left: 250, top: 0 },
      { chairId: 'A7', ischecked: false, left: 275, top: 0 },
      { chairId: 'A8', ischecked: false, left: 300, top: 0 },
      { chairId: 'A9', ischecked: false, left: 325, top: 0 },
      { chairId: 'B1', ischecked: false, left: 125, top: 25 },
      { chairId: 'B2', ischecked: false, left: 150, top: 25 },
      { chairId: 'B3', ischecked: false, left: 175, top: 25 },
      { chairId: 'B4', ischecked: false, left: 200, top: 25 },
      { chairId: 'B5', ischecked: false, left: 225, top: 25 },
      { chairId: 'B6', ischecked: false, left: 250, top: 25 },
      { chairId: 'B7', ischecked: false, left: 275, top: 25 },
      { chairId: 'B8', ischecked: false, left: 300, top: 25 },
      { chairId: 'B9', ischecked: false, left: 325, top: 25 },
      { chairId: 'C1', ischecked: false, left: 125, top: 50 },
      { chairId: 'C2', ischecked: false, left: 150, top: 50 },
      { chairId: 'C3', ischecked: false, left: 175, top: 50 },
      { chairId: 'C4', ischecked: false, left: 200, top: 50 },
      { chairId: 'C5', ischecked: false, left: 225, top: 50 },
      { chairId: 'C6', ischecked: false, left: 250, top: 50 },
      { chairId: 'C7', ischecked: false, left: 275, top: 50 },
      { chairId: 'C8', ischecked: false, left: 300, top: 50 },
      { chairId: 'C9', ischecked: false, left: 325, top: 50 },
      { chairId: 'D1', ischecked: false, left: 125, top: 75 },
      { chairId: 'D2', ischecked: false, left: 150, top: 75 },
      { chairId: 'D3', ischecked: false, left: 175, top: 75 },
      { chairId: 'D4', ischecked: false, left: 200, top: 75 },
      { chairId: 'D5', ischecked: false, left: 225, top: 75 },
      { chairId: 'D6', ischecked: false, left: 250, top: 75 },
      { chairId: 'D7', ischecked: false, left: 275, top: 75 },
      { chairId: 'D8', ischecked: false, left: 300, top: 75 },
      { chairId: 'D9', ischecked: false, left: 325, top: 75 },
      { chairId: 'E1', ischecked: false, left: 125, top: 100 },
      { chairId: 'E2', ischecked: false, left: 150, top: 100 },
      { chairId: 'E3', ischecked: false, left: 175, top: 100 },
      { chairId: 'E4', ischecked: false, left: 200, top: 100 },
      { chairId: 'E5', ischecked: false, left: 225, top: 100 },
      { chairId: 'E6', ischecked: false, left: 250, top: 100 },
      { chairId: 'E7', ischecked: false, left: 275, top: 100 },
      { chairId: 'E8', ischecked: false, left: 300, top: 100 },
      { chairId: 'E9', ischecked: false, left: 325, top: 100 },
      ],
      localStorageSeat: []
    }
  },
  methods: {
    checkedChair (index) {
      this.chair[index].ischecked = !this.chair[index].ischecked
      if (this.chair[index].ischecked) {
        this.localStorageSeat.push(this.chair[index].chairId)
      } else {  
        console.log(1)
      }
      localStorage.setItem('chair',this.localStorageSeat)
    },
    chairOK () {
      this.$store.dispatch('getOrderList',{chairId:this.chair[index].chairId})
      this.$router.push('/isokOrder')
    }
  }
}
</script>

<style lang="less">
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 3000;
    background-color: #fff;
    display: flex;
    .left{
      min-width: 15%;
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      margin-left: 15px;
    }
    .title{
      text-align: center;
      font-size: 17px;
      color: #191a1b;
      -webkit-box-flex: 1;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      div{
        color: #191a1b;
      }
    }
    .right{
      width: 15%;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      margin-right: 15px;
    }
  }
  .info{
    padding: 59px 15px 15px;
    background-color: #fff;
    .film-name{
      font-size: 15px;
      line-height: 21px;
      color: #191a1b;
    }
    .film-des{
      font-size: 13px;
      line-height: 19px;
      margin-top: 4px;
      color: #797d82;
    }
    .film-limit{
      font-size: 11px;
      color: #c03131;
    }
  }
  .seating-chart-wrap{
    width: 100%;
    height: calc(100vh - 45px - 118px);
    overflow-y: hidden;
    top: 118px;
    .seating-chart{
      position: relative;
      .screen{
        position: relative;
        z-index: 2;
        height: 20px;
        width: 190px;
        font-size: 11px;
        line-height: 20px;
        border-radius: 1px 1px 8px 8px;
        text-align: center;
        color: #fff;
        background-color: #dbdbdb;
        transform-origin: 0 0;
      }
      .axion-y{
        position: fixed;
        width: 15px;
        left: 10px;
        top: 115px;
        z-index: 2;
        text-align: center;
        background-color: #191a1b;
        opacity: .2;
        border-radius: 11.5px;
        color: #fff;
        transform-origin: 0 0;
        .rowName{
          width: 100%;
          height: 20px;
          margin: 2.5px 0;
          display: inline-block;
          transform: scale(1, 0.5);
        }
      }
      .map{
        position: absolute;
        bottom: 95px;
        top: 70px;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        transform-origin: 0 0;
        .axion-middle{
          position: absolute;
          left: calc(50% + 1px);
          border-left: 1px dotted #bdc0c5;
          z-index: 2;
          transform: scaleX(.5);
        }
        .seats{
          position: relative;
          .seat{
            transition: all .4s ease;
            position: absolute;
            display: inline-block;
            margin: 2.5px;
            .single{
              width: 24px;
              height: 24px;
              overflow: hidden;
              position: relative;
              .normal{
                height: 100%;
                .icon{
                  width: 1em;
                  height: 1em;
                  position: absolute;
                  vertical-align: -.15em;
                  fill: currentColor;
                  overflow: hidden;
                  font-size: 24px;
                }
              }
            }
          }
        }
      }
    }

  }
  .confirm-btn{
    height: 45px;
    width: 100%;
    font-size: 15px;
    line-height: 45px;
    text-align: center;
    background-color: #ff5f16;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
  } 
  .disable{
    color: #fff;
  }
  .checkedSeat{
    background: green;
  }
</style>
