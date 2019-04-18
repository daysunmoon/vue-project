<template>
  <div class="isokOrder">
    <header data-v-2475a5f8="" style="position: fixed;">
      <i class="iconfont icon-zuo left"></i>
      <div data-v-2475a5f8="" class="title">确认订单</div>
    </header>
    <div class="decorate"></div>
    <div class="group addressee-info">
      <div class="bg-item info-input">
        <i class="iconfont icon-dianhuaben"></i>
        <div class="phone">
          <div class="main-info">150 3697 4592</div>
          <div class="phone-tip">订单信息将发送到该手机</div>
        </div>
      </div>
    </div>
    <div class="group">
      <div class="product">
        <div class="product-item item ">
          <div class="product-photo film-photo">
            <img src="https://pic.maizuo.com/usr/movie/cc8f853de2924d92439c06c5786d35d9.jpg" alt="">
          </div>
          <div class="product-info film-info">
            <div class="product-name">{{ this.$store.state.filmData.name }}</div>
            <div class="film-time">2019-04-10 21:30</div>
            <div class="film-cinema">深圳金逸影城沙井店</div>
            <div class="film-seat">
              <span>1号VIP激光厅</span>
              <span v-for="(item,index) in this.$store.state.orderList" :key="index">{{ item }}</span>
            </div>
            <div class="product-num">×{{this.$store.state.orderList.length}}</div>
            <div class="product-price">
              <small class="icon-yen">¥</small>40.00
              <span class="film-tip">（含服务费5.00元/人）</span>
            </div>
          </div>
        </div>
      </div>
      <div class="products-price">
        <div class="price-item">
            商品金额
          <div class="price-red-font">
            <span class=" price-fmt">
              <i>￥</i>
              <span class="interge" style="font-size: 15px;">40</span>
              <span style="display: none;">.</span>
              <span class="decimal" style="font-size: 10px;"></span>
            </span>
          </div>
        </div>
        <div class="price-item-msg"></div>
      </div>
    </div>
    <div class="preorder-tips">
      <ul class="help-content">
        <li class="head">
          <div class="tips_icon">
            <i class="iconfont icon-quanju-buzhichituikuan"></i>
          </div>
          <div class="tips_header">注意事项</div>
        </li>
        <li>
          <div class="stars">*</div>
          <div class="boxx">该影城不支持订座票退换，请您确认后再进行购买</div>
        </li>
        <li>
          <div class="stars">*</div>
          <div class="boxx">请确定号码无误，支付成功后将无法修改</div>
        </li>
        <li>
          <div class="stars">*</div>
          <div class="boxx">票面打印价由影院统一设置，可能存在票面价格与订购价格不符的情况</div>
        </li>
        <li>
          <div class="stars">*</div>
          <div class="boxx">更多信息请查看影院详情</div>
        </li>
      </ul>
    </div>
    <div class="pay">
      <div class="show-detail" style="display: none;">
        <i class="iconfont icon-sousuo-paixujiantoushang" style="font-size: 15px; color: rgb(121, 125, 130);"></i>
        <i class="iconfont icon-sousuo-paixujiantouxia" style="font-size: 15px; color: rgb(121, 125, 130); display: none;"></i>
        <span>抵扣明细</span>
      </div>
      <div class="to-pay" data-enter-time="1554886741" data-click-fun="track_f_392949">提交订单</div>
      <div class="need-pay">
        <span>
          <small class="icon-yen">¥</small>
          40.00
        </span>
      </div>
      <span>实付</span>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="less">
.isokOrder {
  color: #191a1b;
  padding: 44px 0 50px;
  min-height: 100vh;
  background-color: #f4f4f4;
  position: relative;
}
header {
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
  .left {
    min-width: 15%;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 15px;
  }
  .title {
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    -webkit-box-flex: 1;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.decorate {
  width: 100%;
  height: 5px;
}
.group {
  background-color: #fff;
  margin-bottom: 10px;
  .bg-item {
    height: 75px;
    display: flex;
    i{
      display: block;
      margin: 24px 15px 0 11px;
    }
    .iconfont {
      font-family: iconfont !important;
      font-size: 25px;
      color: rgb(189, 192, 197);
      font-style: normal;
      -webkit-font-smoothing: antialiased;
    }
    .phone {
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      .main-info {
        font-size: 18px;
        color: #191a1b;
      }
      .phone-tip {
        font-size: 11px;
        color: #bdc0c5;
      }
    }
  }
}
.product {
  .product-item {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: #fff;
    .product-photo {
      margin: 15px 2.7vw 15px 0;
      background-color: #f8f8f8;
      height: 117px;
      img {
        height: 31.2vw;
        width: 22.7vw;
        background-color: #f8f8f8;
      }
    }
    .product-info {
      padding: 15px 15px 15px 0;
      height: 147px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      .product-name {
        font-size: 15px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .film-time {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 13px;
        color: #797d82;
      }
      .film-cinema {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 13px;
        color: #797d82;
      }
      .film-seat {
        white-space: normal;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 13px;
        color: #797d82;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .product-num {
        font-size: 13;
        color: #bdc0c5;
        position: absolute;
        bottom: 15px;
        right: 15px;
      }
      .product-price {
        font-size: 15px;
        color: #ff5f16;
        position: absolute;
        bottom: 15px;
        .icon-yen {
          font-size: 10px;
          margin-right: 2px;
        }
        .film-tip {
          font-size: 11px;
          color: #bdc0c5;
        }
      }
    }
  }
}
.products-price {
  font-size: 13px;
  padding: 12px 15px;
  .price-item {
    font-size: 13px;
    color: #797d82;
    .price-red-font {
      color: #ff5f16;
      float: right;
      .price-fmt {
        font-size: 15px;
        color: #ff5f16;
        i {
          font-size: 11px;
          font-style: normal;
        }
      }
    }
  }
  .price-item-msg {
    font-size: 11px;
    color: #bdc0c5;
  }
  .price-item:first-child {
    margin-bottom: 2px;
  }
}
.preorder-tips{
  border-radius: 8px;
  background-color: #fff;
  width: 93%;
  margin: 16px auto;
  .help-content{
    margin: 0;
    font-size: 14px;
    line-height: 25px;
    padding: 12px 15px;
    list-style: none;
    color: #a06b43;
    .head{
      font-size: 15px;
      .tips_icon{
        i{
          font-size: 20px;
        }
      }
    }
    li{
      display: flex;
    }
  }
}
.pay {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 15px;
  border-top: 1px solid #ededed;
  height: 50px;
  div{
    display: inline-block;
    height: 50px;
    line-height: 50px;
  }
  span{
    display: inline-block;
    margin-left: 15px;
    float: right;
    height: 50px;
    line-height: 50px;
  }
  .show-detail{
    span {
      margin-left: 7px;
      color: #797d82;
      font-size: 13px;
    }
  }
  .to-pay {
    margin-left: 15px;
    width: 95px;
    background-color: #ff5f16;
    color: #fff;
    text-align: center;
    float: right;
  }
  .need-pay {
    color: #ff5f16;
    font-size: 15px;
    float: right;
    .icon-yen {
      font-size: 8px;
      margin-right: 2px;
    }
  }
}
.item {
  padding-left: 15px;
  position: relative;
  overflow: hidden;
}
</style>
