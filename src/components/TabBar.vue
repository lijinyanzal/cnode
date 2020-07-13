<template>
  <div class="header">
    <a :href="tabHref(key)" :class="['topic-tab', {'current-tab': tabList[key].focus}]" @click.prevent="currentTabHandler(key)"
    v-for="(value, key) in tabList" :key="key">{{ value.title }}</a> 
  </div>
</template>

<script>
  export default {

    computed: {
      list() {
        return this.$store.state.data
      },
      tabList() {
        return this.$store.state.tabList
      },
      currentTab() {
        return this.$store.state.currentTab
      },
    },
    methods: {
      tabHref(tab) {
        return '/?tab=' + tab
      },
      currentTabHandler(tab) {
        if (tab !== this.currentTab) {
          this.$store.commit('setCurrentTab', tab)
          this.$store.commit('setTabList', tab)
        } 
      },
    }
  }
</script>

<style scoped>
  a {
    color: #778087;
  }
  .header {
    padding: 10px;
    background: #f6f6f6;
    border-radius: 3px 3px 0 0;
    text-align: left;
    margin-right: 305px;
  }
  
  .topic-tab {
    margin: 0 10px;
    color: #80bd01;
    font-size: 14px;
  }
  .current-tab {
    background: #80bd01;
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px;
  }
</style>