<template>
  <div class="hello">
    <el-carousel :autoplay="false">
      <el-carousel-item>
        <div class="slide">
          <h1 v-text="mainTitle"></h1>
          <div class="img">
            <img src="./../assets/images/pc.jpg" alt="">
          </div>
          <section>
            <h2>技术栈</h2>
            <div style="margin-top: 20px; text-align: center">
              <el-tag size="small">vue@2.5.2</el-tag>
              <el-tag size="small" type="success">vuex@3.0.1</el-tag>
              <el-tag size="small" type="info">vue-router@3.0.1</el-tag>
              <el-tag size="small" type="warning">element-ui@2.2.2</el-tag>
              <el-tag size="small" type="danger">node@9.9.4</el-tag>
              <el-tag size="small">npm@5.6.0</el-tag>
              <el-tag size="small" type="success">axios@0.18.0</el-tag>
            </div>
          </section>
          <section>
            <h2>安装</h2>
            <div style="margin-top: 20px;">
              <ul>
                <li>git clone https://github.com/liuqiyu/template-pc.git</li>
                <li>npm install</li>
                <li>npm run dev</li>
              </ul>
            </div>
          </section>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="slide">
          <div class="img">
            <img src="./../assets/images/pc.jpg" alt="">
          </div>
          <section>
            <div style="margin-top: 20px;">
              <ul>
                <li>1、使用element-ui[按需加载]</li>
                <li>2、使用Vuex进行状态管理[模块化]</li>
                <li>3、使用axios进行数据请求</li>
              </ul>
            </div>
          </section>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      mainTitle: state => state.common.mainTitle,
      bodyHeight: state => state.common.bodyHeight,
    }),
  },
  mounted() {
    this.changeMainTitle('集美丽与帅气于一身的PC模板');
  },
  methods: {
    ...mapActions([
      'changeMainTitle',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 100%;
    height: 100%;
  }

  .slide {
    width: 1024px;
    margin: 0 auto;
    height: 100%;
  }
  h1 {
    font-size: 30px;
    font-family: '幼圆';
    padding-top: 100px;
    text-align: center;
  }

  h2 {
    text-align: center;
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
