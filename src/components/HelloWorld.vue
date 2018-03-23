<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="img">
      <img src="./../assets/images/pc.jpg" alt="">
    </div>
    <section>
      <h2>技术栈</h2>
      <div style="margin-top: 20px;">
        <el-tag size="small">vue@2.5.2</el-tag>
        <el-tag size="small">vuex@3.0.1</el-tag>
        <el-tag size="small">vue-router@3.0.1</el-tag>
        <el-tag size="small">element-ui@2.2.2</el-tag>
        <el-tag size="small">node@9.9.4</el-tag>
        <el-tag size="small">npm@5.6.0</el-tag>
      </div>
    </section>
    <section>
      <h2>安装</h2>
      <div style="margin-top: 20px;">
        <ul>
          <li>
            git clone https://github.com/liuqiyu/template-pc.git
          </li>
          <li>
           npm install
          </li>
          <li>
            npm run dev
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '集美丽与帅气于一身的PC模板',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-size: 30px;
    font-family: '幼圆';
    padding-top: 100px;
  }

  .img {
    width: 500px;
    margin: 0 auto;
  }

  .img > img {
    width: 100%;
  }

  section {
    margin-bottom: 40px;
  }

  ul {
    width: 50%;
    margin: 0 auto;
  }

  li {
    width: 100%;
    padding: 20px 20px;
    border-bottom: 1px solid #e1e1e1;
    text-align: left;
    font-size: 14px;
  }
</style>
