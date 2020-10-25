<template>
  <div id="app">
    <router-link to="/index">跳转首页</router-link>
    <router-link to="/user">跳转用户页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
