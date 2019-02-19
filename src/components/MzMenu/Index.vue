<template>
    <footer>
        <li>
            <router-link to="/films">
                <i class="iconfont icon-dianyingyuan"></i>
                <em>电影</em>
            </router-link>
        </li>
        <li>
            <router-link to="/cinemas">
                <i class="iconfont icon-yingyuana"></i>
                <em>影院</em>
            </router-link>
        </li>
        <!-- <li>
            <router-link>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAPFBMVEVHcEx5fYN5fYV5fYJ5foJ6hIR6foJ5fYN5hYV5fYJ5fYJ5fYN5foJ5fYJ5foJ/f4x6foJ7f4N5hYV5fYKENVu0AAAAE3RSTlMAtT39shl31BXm+Xq0/nEUez4XHiZ/OgAAALlJREFUOMu91UkOwyAMBVDmhMyt73/XToEQiI2R2nqF0BMYJD5C/LCU8YCVNyqR4wxU6THK2zw4i+5o3aDjugYc2Z4DE4YeLEkt+DAEqJz6ABiVkk3j/N+oLK9f8unEaKDvgNnrU3Y8+pI9i74l67I+kkN3yaBB1mmUVXrIGk1khaaSpidJ0rOkaCYJmkucFhKlayFRupzk/h6u6X1ZRU4n9ottSJcL2hBvDaGpNDuKxaa5Ad/ybXy7HjOcHHVcz/kMAAAAAElFTkSuQmCC"
                    alt="">
                <em>9.9拼团</em>
            </a>
        </li> -->
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
