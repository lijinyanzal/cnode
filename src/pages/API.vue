<template>
  <div id="wrapper">
    <div id="content">
      <div class="panel">
        <div class="header">
          <BreadCrumb :title="title"></BreadCrumb>
        </div>
        <div class="inner topic">
          <div class="topic_content">
            <div class="markdown-text">
              <p>以下 api 路径均以 
                <strong>
                  <a href="https://cnodejs.org/api/v1" target="_blank">https://cnodejs.org/api/v1</a>
                </strong> 为前缀
              </p>
              <p>update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。</p>
              <h3>主题</h3>
              <h4>get /topics 主题首页</h4>
              <p>接收 get 参数</p>
              <ul>
                <li>page <code>Number</code> 页数</li>
                <li>tab <code>String</code> 主题分类。目前有 <code>ask</code> <code>share</code> <code>job</code> <code>good</code></li>
                <li>limit <code>Number</code> 每一页的主题数量</li>
                <li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
              </ul>
              <p>示例：<a href="/api/v1/topics" target="_blank">/api/v1/topics</a></p>
              <h4>get /topic/:id 主题详情</h4>
              <p>接收 get 参数</p>
              <ul>
                <li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
                <li>accesstoken <code>String</code> 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 <code>is_collect</code> 以及 <code>replies</code> 列表中的 <code>is_uped</code> 值。</li>
              </ul>
              <p>示例：<a href="/api/v1/topic/5433d5e4e737cbe96dcef312" target="_blank">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
              <h3>主题收藏</h3>
              <h4>post /topic_collect/collect 收藏主题</h4>
              <p>接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code> 用户的 accessToken</li>
                <li>topic_id <code>String</code> 主题的id</li>
              </ul>
              <p>返回值示例</p>
              <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="str">"success"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">}</span></code></pre>
              <h4>post /topic_collect/de_collect 取消主题</h4>
              <p>接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code> 用户的 accessToken</li>
                <li>topic_id <code>String</code> 主题的id</li>
              </ul>
              <p>返回值示例</p>
              <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">}</span></code></pre>
              <h4>get /topic_collect/:loginname 用户所收藏的主题</h4>
              <p>
                示例：<a href="/api/v1/topic_collect/alsotang" target="_blank">/api/v1/topic_collect/alsotang</a>
              </p>
              <h3>用户</h3>
              <h4>get /user/:loginname 用户详情</h4>
              <p>示例：
                <a href="/api/v1/user/alsotang" target="_blank">/api/v1/user/alsotang</a>
              </p>
              <h4>post /accesstoken 验证 accessToken 的正确性</h4>
              <p>接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code> 用户的 accessToken</li>
              </ul>
              <p>如果成功匹配上用户，返回成功信息。否则 403。</p>
              <p>返回值示例</p>
              <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> loginname</span><span class="pun">:</span><span class="pln"> req</span><span class="pun">.</span><span class="pln">user</span><span class="pun">.</span><span class="pln">loginname</span><span class="pun">,</span><span class="pln"> id</span><span class="pun">:</span><span class="pln"> req</span><span class="pun">.</span><span class="pln">user</span><span class="pun">.</span><span class="pln">id</span><span class="pun">,</span><span class="pln"> avatar_url</span><span class="pun">:</span><span class="pln"> req</span><span class="pun">.</span><span class="pln">user</span><span class="pun">.</span><span class="pln">avatar_url</span><span class="pun">}</span></code></pre>
              <h3>消息通知</h3>
              <h4>get /message/count 获取未读消息数</h4>
              <p>接收 get 参数</p>
              <ul>
                <li>accesstoken <code>String</code></li>
              </ul>
              <p>返回值示例</p>
              <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln"> data</span><span class="pun">:</span><span class="pln"> </span><span class="lit">3</span><span class="pln"> </span><span class="pun">}</span></code></pre>
              <h4>get /messages 获取已读和未读消息</h4>
              <p>接收 get 参数</p>
              <ul>
                <li>accesstoken <code>String</code></li>
                <li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
              </ul>
              <p>返回值示例</p>
              <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln"> data</span><span class="pun">:</span><span class="pln"> </span><span class="lit">3</span><span class="pln"> </span><span class="pun">}</span></code></pre>
              <h4>post /message/mark_all 标记全部已读</h4>
              <p>接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code></li>
              </ul>
              <p>返回值示例</p>
              <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln"> success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  marked_msgs</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> id</span><span class="pun">:</span><span class="pln"> </span><span class="str">'544ce385aeaeb5931556c6f9'</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">]</span><span class="pln"> </span><span class="pun">}</span></code></pre>
              <h4>post /message/mark_one/:msg_id 标记单个消息为已读</h4>
              <p>请求示例：<a href="/message/mark_one/58ec7d39da8344a81eee0c14" target="_blank">/message/mark_one/58ec7d39da8344a81eee0c14</a></p>
              <p>接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code></li>
              </ul>
              <p>返回值示例</p>
              <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">
  success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  marked_msg_id</span><span class="pun">:</span><span class="pln"> </span><span class="str">"58ec7d39da8344a81eee0c14"</span><span class="pln">
</span><span class="pun">}</span></code></pre>
              <h3>知识点</h3>
              <ol>
                <li>如何获取 accessToken？
                用户登录后，在设置页面可以看到自己的 accessToken。
                建议各移动端应用使用手机扫码的形式登录，验证使用 <code>/accesstoken</code> 接口，登录后长期保存 accessToken。</li>
              </ol>
            </div>
          </div>
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
      title: 'API'
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
    background: #fff;
  }
  .breadcrumb>li>.divider {
    padding: 0 5px;
    color: #ccc;
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
  .breadcrumb {
    padding: 0;
    margin: 0;
    border: none;
    background: 0 0;
    border-radius: 4px;
    text-align: left;
  }
  .breadcrumb > li {
    display: inline-block;
    list-style: none;
    line-height: 20px;
  }
  .breadcrumb a {
    color: #80bd01;
  }
  .breadcrumb>li>.divider {
    padding: 0 5px;
    color: #ccc;
  } 
  .breadcrumb>.new {
    color: #999;
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
  .topic_content h3,
  .topic_content h4 {
    border-bottom: 1px solid #eee;
    margin: 30px 0 15px;
  }
  .topic_content h3 {
    line-height: 40px;
    font-size: 24.5px;
    font-weight: 700;
  }
  .topic_content h4 {
    font-size: 17.5px;
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
  .markdown-text li {
    font-size: 14px;
    line-height: 2em;
    display: list-item;
  }
  .markdown-text li code, 
  .markdown-text p code, 
  .preview li code, 
  .preview p code {
    color: #000;
    background-color: #fcfafa;
    padding: 4px 6px;
  }
  /* pre code {
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
  } */
  
</style>