<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/films/filmList">正在上映</router-link></li>
        <li><router-link to="/films/jijiang">即将上映</router-link></li>
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
                display: flex;
                font-size: 14px;
                line-height: 49px;
                height: 100%;
                color: #191a1b;
            }
            .router-link-active{
              border-bottom: 2px solid #ff5f16;
              color: #ff5f16;
            }
        }
    }
}
</style>
