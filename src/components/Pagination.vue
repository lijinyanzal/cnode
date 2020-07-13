<template>
  <div class="pagination">
    <ul>
      <li @click="change(-1)">«</li>
      <li v-for="num in pageList" :key="num"
        @click="clickHandler(num)"
      >{{ num }}</li>
      <li @click="change(1)">»</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      perPage: 5,
    }
  },
  computed: {
    nowPage: {
      get() {
        return this.$store.state.nowPage
      },
      set(value) {
        this.$store.state.nowPage = value
      }
    },
    filterList() {
      return this.$store.getters.filterList
    },
    totalNum() {
      return this.filterList.length
    },
    totalPage() {
      if (this.totalNum) {
        return Math.ceil(this.totalNum / this.perPage)
      }
      return 0 
    },
    pageList() {
      let start = (this.nowPage - 1) * this.perPage
      return this.numAry.slice(start, start + this.perPage)
    },
    numAry() {
      return new Array(this.totalNum).toString().split(",").map((item, index) => index + 1)
    }
  },
  methods: {
    change(num) {
      let page =  this.nowPage + num
      this.nowPage = page < 1 ? 1 : page > this.totalPage ? this.totalPage : page
    },
    clickHandler(num) {
      console.log(num)
    }
  }  

}
</script>

<style scoped>
  .pagination {
    background: #fff;
    text-align: left;
    margin-right: 305px;
    padding: 10px 0 10px 10px;
  }
  ul {
    list-style: none;
    display: inline-block;
    overflow: hidden;
  }
  li {
    list-style: none;
    float: left;
    border: 1px solid #ddd;
    border-left-width: 0;
    padding: 4px 12px;
  }
  ul:first-child {
    border-left: 1px solid #ddd;
    border-radius: 4px!important;

  }
  ul:last-child {
    border-radius: 4px!important;
  }
</style>