<template>
  <div id="app">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
    import TabBar from './components/TabBar'
    export default {
        components: {
            TabBar
        },
        name: 'app'
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import './assets/fonts/iconfont.css';
    body {
        background-color: #fbf9fe;
    }
</style>