<template>
  <nav class="main-nav">
    <menu><nuxt-link to="/">首页</nuxt-link></menu>
    <menu><nuxt-link to="/articles">文章</nuxt-link></menu>
    <menu><nuxt-link to="/Info">个人中心</nuxt-link></menu>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
  .main-nav{
    width: 100%;
    height: 60px;
    background-color: #000;
    display: flex;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: center;
  }
  menu{
    color: #fff;
  }
  a{
    color: #666;
  }
  .active-link{
    color: #666;
  }
  .exact-active-link{
    color: #ffffff;
  }
</style>