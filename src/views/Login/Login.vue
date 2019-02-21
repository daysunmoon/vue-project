<template>
  <div id="login">
        <div id="logo">
            <img src="@/assets/centerlogo.png" alt="">
        </div>
        <div id="login-form">
            <form action="">
                <div class="phone Input">
                    <input type="text" placeholder="手机号" v-model="username">
                    <div class="get-code">获取验证码</div>
                </div>
                <div class="code Input">
                    <input type="text" placeholder="密码" v-model="password">
                </div>
                <div class="login-btn">
                    <span @click="handleClick">登录</span>
                </div>

            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleClick () {
      axios.post('http://localhost:3000/user/login', {
        userName: this.username,
        password: this.password
      }).then(res => {
        var data = res.data
        console.log(data)
        if (data.code === 0) {
          sessionStorage.setItem('nickname', data.data.nickName)
          this.$router.replace({
            path: this.$route.query.redirect
          })
        } else {
          alert(data.msg)
        }
      })
    }
  }
}
</script>

<style lang="less">
#login{
    height: 100%;
    background: #fff;
}
#login #logo{
    margin: 79px auto 40px;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: center;
    img{
       height: 60px;
    }
}
#login #login-form{
    font-size: 15px;
    input{
      height: 15px;
      line-height: 15px;
      padding: 20px 0;
      width: 100%;
      font-size: 15px;
      color: #191a1b;
      border: 0;
    }
}
#login .Input{
    line-height: 55px;
    margin: 0 25px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    position: relative;
}
#login .phone .get-code{
    position: absolute;
    right: 0px;
    top: 13px;
    line-height: 30px;
    width: 90px;
    text-align: right;
    float: right;
}
#login .login-btn{
    line-height: 45px;
    font-size: 16px;
    margin: 70px 25px 0;
    border-radius: 3px;
    text-align: center;
    background-color: #ff5f16;
    height: 44px;
    color: #fff;
    border: none;
}
</style>
