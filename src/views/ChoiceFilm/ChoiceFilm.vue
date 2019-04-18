<template>
  <div class="choiceFilm">
    <div class="toLeft" @click="toleft">
      <i class="iconfont icon-zuo"></i>
    </div>
    <div class="choiceFilm-title">{{ choiceFilmList.name }}</div>
    <div class="choiceFilm-content">
      <div class="choiceFilm-info">
        <div class="tags">
          <div class="tag">取票</div>
          <div class="tag">儿童票</div>
          <div class="tag">停车</div>
          <div class="tag">3D眼镜</div>
          <i class="iconfont icon-youxiang"></i>
        </div>
        <div class="address">
          <img src="data:image/png;base64,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" alt="" />
          <div class="address-title">{{ choiceFilmList.address }}</div>
          <a href="tel:0755-29925858" class="address-tel">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAMAAABdslGrAAACJVBMVEVHcEwhISEzMzMZHBwZMzMZGhsZGxsZGhsZGhv///8ZGxsbGxsfHx8kJCQaGh0bGxsZGhsZJiYqKioaGhwZHR0ZGhsZGhsZGxsZGhsaGh5VVVV/f38ZGhscHBwZGhsZGhsaGigZGhsZGhwZGhsZGhsaGh8ZGhsaGhsbGxsaGhsaGhsZHBwaGh0fHx8nJycZGhwZGxscHBwZGxsZGhscHBwbGxsZGxsaGhsaGhscHBwaGiAZGxsaGhsaGhwZHBwZGxsaGh4ZGhsZGhsZGhsZGxsZGhscHBwZGhsaGhwdHR0fHx8ZGhwZGxsZGhwkJCQaGiMZGhsZGhsbGxsdHR0ZGhsbGxsaGhsaGhsaGhsZGxscHBwbGxsZGxsZGhwZHx8ZGxsaGhseHh4aGh0cHBwbGxsZHh4bGxsaGhsZGhweHh4ZGxsZGxsZGhsZHh4ZGxsaGhseHh4cHBw/Pz8ZGhsfHx8ZGxsZGxsZGhsaGh0ZGxsZGhwcHBwaGhsaGhwbGxsZGhwZGhwZGxsZGhsZGhwZGxsaGhsiIiIZGhsZGhscHBwZHBwaGhwqKioZGhwZGhsaGh8ZIiIaGhseHh4ZGxsaGhwbGxsbGxsZGxsZGxsZGhsaGh8ZGhwaGh0ZGhsZGhsZGxsZGhwaGh0aGhwZHBwaGhwbGxsZGxsaGh0ZGxsbGxsfHx8eHh4ZGhsdHR0ZGhsbGxsZGhsZGhsZHR0ZGhsZGhwaGhwZGhuqFRxRAAAAtnRSTlMAFwVZCvqy/v0Bl2cQB2kl5RQGYT3M+NnKQwMC8iTq8BP7vfbtMO65QsOldk4gDceDPs75G16zkq4SJ52TiFtuTOfd5Kr3CfR/Iwi1oNoVHfPWcTS3L5u6nLtISWW/KHfrImg/SjNBxLQqlajUO8bXITUE6RiEje9Wiq029WpA45mx0qNvpBbByy1kYgyr5jkerxGMkS43eGbbMch78dWe0V+FbHxUgXJ5XCkZ4CvJOOj8RdOYkJ3guaYAAAJ3SURBVBgZvcEFcxNRAEbRr22S3dTd3XApLoVCi7u7u7u7u7u7u97fR5NNCkM2vGWY4Rz9m025DUH9jQHJmUC7Ennma7QIS5JXqT1o5c+EU/LoXDcgryg7qwZy5c04sJcEJR2Cy/KkzoYchSywsEfLiwAMk2MsNMqDtBqsMjmKYGSqzJbCV0U9goUyS4dvinoMLYkySofvisoeCoNltASS1eYe5MloGXxQm8oaWCqT1CrsCWqTDIdlNB9y1GaAhZ0hk5fQTz/1gd0yKYORYxTVqwOsktFkWKaInFIgSUaDYKAc6y2wO8nsBgyfoLDNwDx5cRdeyLEHugXlwXNYNEJhXYZDb3lQ3AzpcnSHC1fkwVMYX6Iw30EYG5SZrxZuyTHEglHy4BnUn5DjCdhzZZY2Ho7KUTIT6hfIrAhoL0flO/j0XmbHoSBNjuWlsKhORgk7oa8iPlZA/VSFrBjVOah4UoCzilheC5NeS4kzgHYJimct9LyoiOnlwLj+AUK2zlEcvh4wtJci3kwG9gErbbB2ZMvdpXIoHKEI30NCktU+E8jLkLsGP5zsqqjBpTCtWMrqA0zqLXcpQGF/RWX0W+NTSFM+0LGrXB2z4EiCYkzfCDTvlaszNhRMVAzfLMDfKSg3SVVQPlexdlUAsxPkpnM+WFcTFaPLBmBdqtzktgCFoxVjy3Yb9stVZQC4n1KsGB0gXXE05QMPhug3ddBzm+K5U0Cr+VP1q8RqGKj4xtysAKxhB4KKCnYEa7X+JOuan1a3X71V2OKZwBQZlJ0n5HNg3pc5KQE/MEhmp/vW8lNVd3mSllRtEWZVX5dnixfOmj1txpSJ+t9+AAZEC6aFGvT2AAAAAElFTkSuQmCC" alt="">
          </a>
        </div>
      </div>
      <div class="choiceFilm-schedule">
        <div class="film-img">
          <div class="imgItem" style="background-image: url(&quot;https://pic.maizuo.com/usr/movie/85f4fc27c6b90d7e84295e115837728b.jpg&quot;);"></div>
        </div>
        <div class="film-list">
          <div class="swiper-container swiper-container-horizontal swiper-container-ios swiper-container-wp8-horizontal">
            <div class="swiper-wrapper" style="transform: translate3d(-376.25px, 0px, 0px); transition-duration: 0ms;">
              <div data-v-1ed7d58f="" class="swiper-slide" style="width: 91.5px; margin-right: 16px;">
                <div data-v-1ed7d58f="" class="film-item">
                  <div data-v-1ed7d58f="" class="img-wrap">
                    <img data-v-1ed7d58f="" src="https://pic.maizuo.com/usr/movie/a2d61d2ac9452a246cba2354162fcab9.jpg" alt="">
                  </div>
                </div>
              </div>
              <div data-v-1ed7d58f="" class="swiper-slide" style="width: 91.5px; margin-right: 16px;">
                <div data-v-1ed7d58f="" class="film-item">
                  <div data-v-1ed7d58f="" class="img-wrap">
                    <img data-v-1ed7d58f="" src="https://pic.maizuo.com/usr/movie/91f5bcd51621c9d7f2da217b1c208c7b.jpg" alt="">
                  </div>
                </div>
              </div>
              <div data-v-1ed7d58f="" class="swiper-slide" style="width: 91.5px; margin-right: 16px;">
                <div data-v-1ed7d58f="" class="film-item">
                  <div data-v-1ed7d58f="" class="img-wrap">
                    <img data-v-1ed7d58f="" src="https://pic.maizuo.com/usr/movie/227ffe3aa02f6a503c94e6674c47d1b9.jpg" alt="">
                  </div>
                </div>
              </div>
              <div data-v-1ed7d58f="" class="swiper-slide" style="width: 91.5px; margin-right: 16px;">
                <div data-v-1ed7d58f="" class="film-item">
                  <div data-v-1ed7d58f="" class="img-wrap">
                    <img data-v-1ed7d58f="" src="https://pic.maizuo.com/usr/movie/7cfc6dce2e2f130db2fc28153b370dc9.jpg" alt="">
                  </div>
                </div>
              </div>
              <div data-v-1ed7d58f="" class="swiper-slide swiper-slide-prev" style="width: 91.5px; margin-right: 16px;">
                <div data-v-1ed7d58f="" class="film-item">
                  <div data-v-1ed7d58f="" class="img-wrap">
                    <img data-v-1ed7d58f="" src="https://pic.maizuo.com/usr/movie/d5e399dba2f9a5378407dc4cfe4e731d.jpg" alt="">
                  </div>
                </div>
              </div>
              <div data-v-1ed7d58f="" class="swiper-slide swiper-slide-active" style="width: 91.5px; margin-right: 16px;">
                <div data-v-1ed7d58f="" class="film-item">
                  <div data-v-1ed7d58f="" class="img-wrap">
                    <img data-v-1ed7d58f="" src="https://pic.maizuo.com/usr/movie/85f4fc27c6b90d7e84295e115837728b.jpg" alt="">
                  </div>
                </div>
              </div>
              <div data-v-1ed7d58f="" class="swiper-slide swiper-slide-next" style="width: 91.5px; margin-right: 16px;">
                <div data-v-1ed7d58f="" class="film-item">
                  <div data-v-1ed7d58f="" class="img-wrap">
                    <img data-v-1ed7d58f="" src="https://pic.maizuo.com/usr/movie/5f0c0a36e48dd5278480b9ef64dd553a.jpg" alt="">
                  </div>
                </div>
              </div>
              <div data-v-1ed7d58f="" class="swiper-slide" style="width: 91.5px; margin-right: 16px;">
                <div data-v-1ed7d58f="" class="film-item">
                  <div data-v-1ed7d58f="" class="img-wrap">
                    <img data-v-1ed7d58f="" src="https://pic.maizuo.com/usr/movie/494fd576aa3d246ce2041b786cc827ef.jpg" alt="">
                  </div>
                </div>
              </div>
              <div data-v-1ed7d58f="" class="swiper-slide" style="width: 91.5px; margin-right: 16px;">
                <div data-v-1ed7d58f="" class="film-item">
                  <div data-v-1ed7d58f="" class="img-wrap">
                    <img data-v-1ed7d58f="" src="https://pic.maizuo.com/usr/movie/3b5e3c05f558ff4edd12ffc2bd72fec1.jpg" alt="">
                  </div>
                </div>
              </div>
              <div data-v-1ed7d58f="" class="swiper-slide" style="width: 91.5px; margin-right: 16px;">
                <div data-v-1ed7d58f="" class="film-item">
                  <div data-v-1ed7d58f="" class="img-wrap">
                    <img data-v-1ed7d58f="" src="https://pic.maizuo.com/usr/movie/48b5bf7addeea84ca1232a3560c3a6b2.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-1ed7d58f="" class="triangle">
            <img data-v-1ed7d58f="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUAgMAAACCKJcoAAAACVBMVEVHcEz////////mcEUwAAAAAnRSTlMAgJsrThgAAABLSURBVAgdBcEBDQAACAMg/GYDAxnB/mkEUAuBPgjMQOAagtpaBM0hGAbB0Qi11BIajjAwhIMmaqFWNHBigBEHtNQCtWmAywBMDqAfx4oGipkmrUEAAAAASUVORK5CYII=" width="20px" height="10px" alt="">
          </div>
        </div>
        <div class="film-info">
          <div data-v-1ed7d58f="" class="film-head">
            <span class="film-name">{{ this.$store.state.filmData.name }}</span>
            <span class="film-score">{{ this.$store.state.filmData.grade }}</span>
            <span class="film-score-unit">分</span>
          </div>
          <div class="film-desc">{{ this.$store.state.filmData.category}} | 100分钟 | {{ this.$store.state.filmData.director}} | <span v-for="(item,index) in this.$store.state.filmData.actors" :key="index">{{item.name}}</span> </div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAZlBMVEVHcEwZGhseHh4aGh8zMzMZGhsZGhwZGhsfHx8ZGhsbGxsZGhsZGxsZGxsZGxsZGxsbGxsaGhsaGh0aGh0ZGhwbGxsZGhweHh4ZGhsaGh0ZGxsZGxsZGxsZGhsZGxsZGxsaGhwZGhtuA7MxAAAAIXRSTlMA6iE5Bda99xD+OOWenXh6VddWV9BxviLpe7x5jeSBgI/e7hU0AAAAeUlEQVQY023PyRqCMAyFUSilA2VGnBX/939JN01QP7O6Z5ObFGt6FjoPuCjuEBeBvYKvRKGG8iQyZ5iCqPFwtKIxQqsre2BQdV8F7rfgoJh2WAe+yWghjjkPQJ/zHKHLufLg8jmmhDp8vGD+LH1BnKU6wU3vXdOm+Q34ngmHHMc+eAAAAABJRU5ErkJggg==" width="4px" height="8px" alt="" class="film-more">
        </div>
        <div class="date-list">
          <div class="tabs-bar-wrapper dateWrap">
            <div class="tabs-bar">
              <ul class="tabs-nav">
                <li class="active" style="padding: 0px 15px;">
                  <span>今天4月5日</span>
                </li>
                <li class="" style="padding: 0px 15px;">
                  <span>明天4月6日</span>
                </li>
                <li class="" style="padding: 0px 15px;">
                  <span>后天4月7日</span>
                </li>
                <div class="tab-ink-bar-wrapper" style="transform: translate3d(0%, 0px, 0px); padding: 0px 15px;">
                  <span class="tab-ink-bar" style="width: 72px;"></span>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <FilmTime></FilmTime>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import FilmTime from '@/components/FilmTime/Index.vue'
export default {
  components: {
    FilmTime
  },
  data () {
    return {
      choiceFilmList: {}
    }
  },
  created () {
    console.log(this.$store.state.filmData)
    axios.get('https://m.maizuo.com/gateway', {
      params: {
        cinemaId: this.$route.params.id
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1553930407734439407655"}',
        'X-Host': 'mall.film-ticket.cinema.info'
      }
    }).then(res => {
      let data = res.data
      // console.log(data)
      if (data.status === 0) {
        this.choiceFilmList = data.data.cinema
        // console.log(this.choiceFilmList)
      } else {
        alert('网络异常，请稍后重试')
      }
    })
  },
  methods: {
    toleft () {
      this.$router.push({
        path: '/selectCinema'
      })
    }
  }
}
</script>

<style lang="less">
  .choiceFilm{
    overflow: hidden;
    padding-top: 44px;
    background: #fff;
    min-height: 100vh;
    .toLeft{
      position: fixed;
      top: 0;
      height: 44px;
      line-height: 44px;
      padding-left: 15px;
      z-index: 303;
      i{
        width: 11px;
        height: 18px;
      }
    }
    .choiceFilm-title{
      position: relative;
      text-align: center;
      font-size: 17px;
      color: #191a1b;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      padding: 0 15px;
      background: #fff;
      top: 0;
      height: 44px;
      line-height: 44px;
      z-index: 302;
    }
    .choiceFilm-content{
      .choiceFilm-info{
        .tags{
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          font-size: 15px;
          color: #ffb232;
          overflow: hidden;
          position: relative;
          padding: 5px 0 15px;
          .tag{
            position: relative;
            padding: 0 6px;
            margin: 0 2.5px;
            font-size: 10px;
          }
        }
        .address{
          height: 50px;
          position: relative;
          display: flex;
          padding-left: 17px;
          -webkit-box-align: center;
          align-items: center;
          img{
            width: 14px;
            height: 21px;
          }
          .address-title{
            font-size: 14px;
            height: 20px;
            padding: 0 12px;
            flex: 1;
            position: relative;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .address-tel{
            height: 18px;
            padding: 0 25px;
            img{
              width: 17px;
              height: 18px;
            }
          }
        }
      }
      .choiceFilm-schedule{
        position: relative;
        .film-img{
          position: absolute;
          top: 0;
          height: 160px;
          width: 100%;
          overflow: hidden;
          .imgItem{
            height: 100%;
            width: 100%;
            -webkit-filter: blur(30px);
          }
        }
        .film-list{
          height: 160px;
          position: relative;
          .swiper-container {
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            list-style: none;
            padding: 0;
            z-index: 1;
            .swiper-wrapper {
              position: relative;
              width: 100%;
              height: 100%;
              z-index: 1;
              display: flex;
              transition-property: transform,-webkit-transform;
              box-sizing: content-box;
              .film-item{
                display: flex;
                -webkit-box-pack: center;
                justify-content: center;
                height: 100%;
                width: 100%;
                padding-top: 26px;
                transition: all .5s ease;
                .img-wrap{
                  width: 72px;
                  transition: all .5s ease;
                  img{
                    width: 100%!important;
                    height: 100%!important;
                  }
                }
              }
            }
          }
          .triangle{
            position: relative;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            top: 25px;
          }
        }
        .film-info{
          width: 100%;
          background: #fff;
          height: 80px;
          padding: 15px 0;
          position: relative;
          .film-head{
            margin-bottom: 10px;
            text-align: center;
            line-height: 18px;
            .film-name{
              font-size: 15px;
              color: #191a1b;
              padding-right: 5px;
            }
            .film-score{
              font-size: 16px;
              font-style: italic;
              color: #ffb232;
            }
            .film-score-unit{
              font-size: 10px;
              color: #ffb232;
            }
          }
          .film-desc{
            text-align: center;
            height: 18px;
            color: #797d82;
            font-size: 13px;
            padding: 0 12%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .film-more{
            position: absolute;
            right: 15px;
            top: 0;
            margin-top: 36px;
          }
        }
        .date-list{
          width: 100%;
          .tabs-bar-wrapper {
            position: relative;
            z-index: 100;
            width: 100%;
            overflow-x: hidden;
            background: #fff;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            .tabs-bar {
              height: 49px;
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              overflow-x: auto;
              overflow-y: hidden;
              transition: transform .2s cubic-bezier(.35,0,.25,1),-webkit-transform .2s cubic-bezier(.35,0,.25,1);
              position: relative;
              .tabs-nav {
                display: -webkit-flex;
                -webkit-box-pack: start;
                justify-content: flex-start;
                -webkit-box-align: center;
                align-items: center;
                position: relative;
                width: 100%;
                li {
                -webkit-flex-shrink: 0;
                text-align: center;
                height: 16px;
                line-height: 16px;
                font-size: 14px;
                cursor: pointer;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
              }
                li.active {
                  color: #ff5f16;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
