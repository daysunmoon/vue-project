<template>
    <div class="cinema">
        <div class="top">
            <span>深圳<i class="iconfont icon-tubiao-"></i></span>
            <p>影院</p>
            <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="nav">
            <div>
                <span class="globle">全城</span>
                <i class="iconfont icon-tubiao-"></i>
            </div>
            <div>
                <span class="recent">最近去过</span>
                <i class="iconfont icon-tubiao-"></i>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.cinema {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: #fff;
  .top {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    height: 44px;
    align-items: center;
    width: 90%;
    margin: auto;
    span {
      font-size: 13px;
    }
    p {
      font-size: 17px;
    }
    i {
      font-size: 18px;
    }
  }
  .nav {
    height: 49px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    span {
      font-size: 14px;
    }
  }
}
</style>
