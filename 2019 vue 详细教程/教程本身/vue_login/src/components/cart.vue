<template>
  <div class="cart">
    <h1>cart !!!获得权限后展示数据{{msg}}</h1>
    <router-link to="home">home</router-link>
    <router-link to="cart">cart</router-link>
    <router-link to="login">login</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'cart',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    axios({
      url: 'http://192.168.0.179:8080/account/current',
      method: 'post',
      contentType: 'application/json'
    }).then(res => {
      console.log(res)
      this.msg = res.data.data.age
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
