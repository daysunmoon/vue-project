<template>
    <footer>
        <li>
            <router-link to="/films">
                <i class="iconfont icon-dianyingyuan"></i>
                <em>电影</em>
            </router-link>
        </li>
        <li>
            <router-link to="/cinemas" >
                <i class="iconfont icon-yingyuana"></i>
                <em>影院</em>
            </router-link>
        </li>
        <li>
            <router-link to="/center">
                <i class="iconfont icon-user"></i>
                <em>我的</em>
            </router-link>
        </li>
    </footer>
</template>
<style lang="less">
footer {
    height: 49px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    li{
        display: flex;
        width: 25%;
        a{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #797d82;
            .iconfont{
                font-size: 21px;
            }
            em {
                font-size: 10px;
            }
            &.router-link-active{
                color: #ff5f16;
            }
        }
    }
}
</style>
