<template>
  <div class="hello">
    <router-link to="home">home</router-link>
    <router-link to="cart">cart</router-link>
    <router-link to="login">login</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
