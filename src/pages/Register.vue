<template>
  <div id="wrapper">
    <div id="content">
      <div class="panel">
        <div class="header">
          <BreadCrumb :title="title"></BreadCrumb>
        </div>
        <div class="inner">
          <form id="signin_form" class="form-horizontal" action="/topics" method="post">
            <div class="control-group">
              <label class="control-label" for="name">用户名</label>
              <div class="controls">
                <input class="input-xlarge" id="name" name="name" size="30" type="text" v-model="name">
              </div>
            </div>
            <div class="control-group">
              <label class="control-label" for="phone">手机号</label>
              <div class="controls">
                <input class="input-xlarge" id="phone" name="phone" size="30" type="phone" v-model="phone" >
              </div>
            </div>
            <!-- <div class="control-group">
              <label class="control-label" for="validate">手机验证码</label>
              <div class="controls input-prepend">
                <input class="input-xlarge" id="validate" name="validate" size="30" type="text" v-model="validate">
                <a class="btn-up-resend js-send-code-button disable" href="javascript:void(0);" id="send_code">发送验证码</a>
              </div>
            </div> -->
            <div class="control-group">
              <label class="control-label" for="passwd">密码</label>
              <div class="controls">
                <input class="input-xlarge" id="passwd" name="passwd" size="30" type="password">
              </div>
            </div>
            <input type="hidden" name="_csrf" value="FoCseVE6-OahKKUkmnNMfo2dAwySuClXkJrk">
            <div class="form-actions">
              <input type="submit" class="span-primary" value="注册" @click.prevent="login">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  import BreadCrumb from '@/components/BreadCrumb.vue'

  export default {
    data() {
      return {
        title: '注册',
        name: '',
        phone: '',
        passwd: '',
      }
    },
    methods: {
      login() {
        const { name, passwd } = this
        console.log(name, passwd)
        this.$router.push('/topics')
      }
    },
    components: {
      BreadCrumb,
    }

  }
</script>

<style scoped>
  #content {
    padding: 0;
    margin-right: 305px;
    padding-bottom: 300px;
    background: #fff;
  }
  .panel {
    font-size: 13px;
    margin-bottom: 13px;
    line-height: 2em;
    text-align: left;
  }
  .panel .header {
    color: #51585c;
    background: #f6f6f6;
    border-radius: 3px 3px 0 0;
    padding: 10px;
  }
  form {
    margin: 20px 250px;
  }
  input {
    height: 20px;
    padding: 4px 6px;
    font-size: 14px;
    line-height: 20px;
    border-radius: 4px;
    width: 270px;
    font-weight: 400;
    border: 1px solid #ccc;
  }
  input:focus {
    outline: none;
  }
  .input-prepend {
    position: relative;
  }
  .btn-up-resend {
    position: absolute;
    right: 80px;
    width: 80px;
    height: 30px;
    line-height: 36px;
    font-size: 13px;
    text-align: center;
    bottom: 3px;
  }
  .form-horizontal .control-group {
    margin-bottom: 10px;
  }
  .form-actions input {
    height: 40px;
    width: 284px;
    margin-top: 20px;
  }
  .header .col_fade {
    color: #444;
  }
  .panel .inner {
    background: #fff;
    padding: 10px
  }
  .panel .inner a {
    color: #778087;
  }
  .board {
    margin-top: 10px;
    width: 80%;
  }
  .inner.topic {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
  }
  .topic_content {
    margin: 0 10px;
    text-align: left;
  }
  .topic_content h2,
  .topic_content h3 {
    line-height: 40px;
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee;
    font-weight: 700;
  }
  .topic_content h3:first-of-type {
    margin: 0 0 15px;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 24.5px;
  }
  .topic_content p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
    margin: 1em 0
   }
   .panel .markdown-text a {
    color: #08c;
  }
</style>