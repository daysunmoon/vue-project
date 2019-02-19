<template>
  <div>
    <nav>
      <ul>
        <li><a href="#">正在上映</a></li>
        <li><a href="#">即将上映</a></li>
      </ul>
    </nav>
  </div>
</template>
<style lang="less">
nav {
    height: 49px;
    ul {
        display: flex;
        justify-content: space-around;
        width: 100%;
        li {
            a{
                font-size: 14px;
                line-height: 49px;
                color: #191a1b;
            }
        }
        // li:first-child {
        //     color: #ff5f16;
        //     border-bottom: 2px solid #ff5f16;
        // }
        // li:last-child {
        //     font-size: 14px;
        //     line-height: 49px;
        // }
    }
}
</style>
