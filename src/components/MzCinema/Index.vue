<template>
    <div class="cinema">
        <div class="top">
            <span>深圳<i class="iconfont icon-tubiao-"></i></span>
            <p>影院</p>
            <i class="iconfont icon-sousuo"></i>
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
}
</style>
