<template>
  <div>
    <Row type="flex" justify="center">
      <div class="top-bg"></div>
      <Col span="22" :md="20" :lg="22" :xl="17">
        <Col class="home-top" :xs="21" :sm="14" :md="12" :lg="9" :xl="9" :xxl="8">
          <h2>关于Hi translator</h2>
          <p>有言在前（LanguageAI）是一家语言服务和全球化公司是通过互联网组织一折为市场提供语言服务，治理全球化传播</p>
          <div>
            <span>全球互通</span>·
            <span>有言在前</span>·
            <span>沟通世界</span>·
            <span>传承文明</span>
          </div>
        </Col>
      </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col class="home-content" span="22" :md="20" :lg="22" :xl="17" :style="{marginBottom: `${footerHeight}px`}">
        <div class="number">
          <div>
            <h1>2018</h1>
            <p>Found</p>
          </div>
          <div>
            <h1>+10K</h1>
            <p>Translators</p>
          </div>
          <div>
            <h1>+120B</h1>
            <p>Words</p>
          </div>
        </div>
        <div class="mission">
          <img src="../resource/images/mission.png" alt="mission">
          <div>
            <h2>Our Mission</h2>
            <p>消除语言障碍，助力全球文化传播，让全球用户自由沟通</p>
            <div>Our mission is to organize the world's translators and make it universally accessible and useful.Different languages also chat</div>
          </div>
        </div>
      </Col>
    </Row>

    <!-- <foot /> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

import foot from '@/components/footer'

export default {
  computed: {
    ...mapState([
      'screenWidth', 'footerHeight'
    ])
  },
  components: { foot }
}
</script>

<style lang="scss" scoped>
$font-color: #515a6e;
$bg-color: #16ab8e;
.top-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 17rem;
  background: url('../resource/images/nav-bg1.png');
  background-size: cover;
  object-fit: cover;
}
.home-top {
  margin: 1.6rem 0;
  color:$font-color;
  h2 {
    color: $bg-color;
  }
  p {
    line-height: 1.5 
  }
  div>span:nth-child(odd) {
    color:$bg-color;
  }
}
.home-content {
  position: absolute;
  top: 15rem;
  .number {
    display: flex;
    align-items: center;
    &>div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem 0;
      color: $font-color;
      h1 {
        color: $bg-color;
        line-height: 2;
      }
      p {
        font-weight: bold;
      }
    }
  }
  .mission {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    img {
      flex: 1;
      height: 19rem;
    }
    &>div {
      margin-left: 1.5rem;
      color: $font-color;
      line-height: 1.5;
      h2 {
        color: $bg-color;
        line-height: 2;
      }
      div {
        margin-top: 1rem;
      }
    }
  }
}
</style>
