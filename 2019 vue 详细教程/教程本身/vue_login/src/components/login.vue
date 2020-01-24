<template>
  <div class="login">
    <input type="text" placeholder="请输入用户名" v-model="loginForm.username" ref="user" />
    <input type="text" placeholder="请输入密码" v-model="loginForm.password" ref="pass" />
    <button @click="login">登录</button>

    <label>
      用户名:
      <input type="text" v-model="r.username" />
    </label>
    <label>
      密码:
      <input type="password" v-model="r.password" name id />
    </label>
    <label for>
      再次：
      <input type="password" v-model="r.Apassword" />
    </label>
    <label>
      验证码
      <input type="text" v-model="r.Vcode" />
    </label>
    <button @click="regeister">regeister</button>
  </div>
</template>

<script>
import { login, Register } from '@/api/index'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      r: {
        username: '',
        password: '',
        Apassword: '',
        Vcode: ''
      }
    }
  },
  methods: {
    login () {
      let that = this
      // eslint-disable-next-line eqeqeq
      if (this.loginForm.username.trim() == '' || this.loginForm.password.trim() == '') {
        alert('账号或者密码不能为空')
      } else {
        login(this.loginForm.username, this.loginForm.password).then(res => {
          console.log(res)

          if (res.status === 200) {
            // 登录成功的状态码后端提供
            alert('登陆成功')
            // 利用sessionStorage进行保存后端返回的token
            sessionStorage.setItem('token', res.data.data)
            console.log(res.data.data, sessionStorage.getItem('token'))
            // 登录成功跳转页面
            that.$router.push('/home')
          } else if (res.data.status === -4) {
            alert(res.data.msg)
          }
        }).catch(error => {
          alert('账号或密码错误')
          console.log(error)
        })
      }
    },
    regeister () {
      if (this.r.username.trim() === '' || this.r.password.trim() === '' || this.r.Apassword.trim() === '' || this.r.Vcode.trim() === '') {
        console.log('缺少参数')
      } else {
        Register(this.r.username, this.r.password, this.r.Apassword, this.r.Vcode).then(res => {
          console.log(res)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
